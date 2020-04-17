/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import api from '~/services/api';

import { requestReload } from '~/store/modules/reload/actions';

import Delivery from '~/components/Delivery';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  ProfileImg,
  Span,
  Name,
  TextContainer,
  LogoutButton,
  Content,
  Title,
  Filter,
  ContentHeader,
  List,
  Text,
  UpdateList,
  UpdateListText,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth.deliveryman);
  const reload = useSelector((state) => state.reload.status);
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('pending');
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const image_url = deliveryman.avatar && deliveryman.avatar.url;
  const image_url_formatted =
    image_url && image_url.replace('localhost', '192.168.25.2');

  const loadDeliveries = useCallback(async () => {
    const response =
      filter === 'pending'
        ? await api.get(`/deliveryman/${deliveryman.id}/deliveries`, {
            params: { page },
          })
        : await api.get(`/deliveryman/${deliveryman.id}/delivered`, {
            params: { page },
          });

    const data = response.data.map((delivery) => ({
      ...delivery,
      createdAtFormatted: format(parseISO(delivery.createdAt), 'dd/MM/yyyy'),
      startDateFormatted:
        delivery.start_date &&
        format(parseISO(delivery.start_date), 'dd/MM/yyyy'),
      endDateFormatted:
        delivery.end_date && format(parseISO(delivery.end_date), 'dd/MM/yyyy'),
    }));

    setDeliveries(page >= 2 ? [...deliveries, ...data] : data);
    setLoading(false);
    setRefresh(false);
  }, [deliveryman.id, filter, page]);

  useEffect(() => {
    loadDeliveries();
    dispatch(requestReload(false));
  }, [loadDeliveries, filter, page, reload]);

  function refreshDeliveries() {
    setLoading(true);
    setRefresh(true);
    setPage(1);
    setDeliveries([]);
    loadDeliveries();
  }

  function loadMore() {
    setPage(page + 1);
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleChangeFilter(newFilter) {
    setLoading(true);
    setFilter(newFilter);
    setPage(1);
    setDeliveries([]);
  }

  function handleOrderDetails(order) {
    setPage(1);
    navigation.navigate('OrderDetails', { order, deliveryman });
  }

  return (
    <Container>
      <Header>
        <ProfileImg
          source={{
            uri:
              image_url_formatted ||
              `https://ui-avatars.com/api/?name=${deliveryman.name}&background=F4EFFC&color=A28FD0&size=136`,
          }}
        />
        <TextContainer>
          <Span>Bem vindo de volta,</Span>
          <Name>{deliveryman.name}</Name>
        </TextContainer>
        <LogoutButton onPress={handleSignOut}>
          <Icon name="exit-to-app" size={24} color="#E74040" />
        </LogoutButton>
      </Header>

      <Content>
        <ContentHeader>
          <Title>Entregas</Title>
          <Filter
            isActive={filter === 'pending'}
            onPress={() => handleChangeFilter('pending')}
          >
            Pendentes
          </Filter>
          <Filter
            isActive={filter === 'delivered'}
            onPress={() => handleChangeFilter('delivered')}
          >
            Entregues
          </Filter>
        </ContentHeader>
        {loading ? (
          <ActivityIndicator
            size={50}
            color="#7D40E7"
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
          />
        ) : deliveries.length > 0 ? (
          <List
            onRefresh={refreshDeliveries}
            refreshing={refresh}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
            data={deliveries}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Delivery
                data={item}
                handleSeeDetails={() => handleOrderDetails(item)}
              />
            )}
          />
        ) : (
          <>
            <Text>
              Você não possui entregas{' '}
              {filter === 'pending' ? 'pendentes.' : 'finalizadas.'}
            </Text>
            <UpdateList onPress={loadDeliveries}>
              <UpdateListText>Clique para atualizar a lista</UpdateListText>
            </UpdateList>
          </>
        )}
      </Content>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ color, size }) => (
    <Icon name="view-headline" size={size} color={color} />
  ),
};

Dashboard.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
