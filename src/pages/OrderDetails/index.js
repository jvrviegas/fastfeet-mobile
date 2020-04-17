import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { requestReload } from '~/store/modules/reload/actions';

import Background from '~/components/Background';
import * as Toast from '~/components/Toast';

import {
  Container,
  Content,
  DeliveryInfo,
  DeliveryActions,
  Dates,
  Date,
  Header,
  Title,
  Subtitle,
  Text,
  Action,
  ActionText,
} from './styles';

export default function OrderDetails({ route, navigation }) {
  const { order, deliveryman } = route.params;
  const dispatch = useDispatch();

  async function handleStartDelivery() {
    Toast.loading(true);
    try {
      await api.put(`deliveryman/${deliveryman.id}/start_delivery/${order.id}`);

      Toast.loading(false);
      Toast.success('Encomenda retirada com sucesso!');
      dispatch(requestReload(true));
      navigation.navigate('Deliveries');
    } catch (error) {
      Toast.loading(false);
      Toast.error('Não foi possível efetuar a operação, tente novamente');
    }
  }

  function handleReportProblem() {
    navigation.navigate('ReportProblem', { order_id: order.id });
  }

  function handleViewProblem() {
    navigation.navigate('ViewProblem', { order_id: order.id });
  }

  function handleConfirmDelivery() {
    navigation.navigate('ConfirmDelivery', {
      order_id: order.id,
      deliveryman_id: deliveryman.id,
    });
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <DeliveryInfo>
            <Header>
              <Icon name="local-shipping" size={24} color="#7D40E7" />
              <Title>Informações da entrega</Title>
            </Header>

            <Subtitle>Destinatário</Subtitle>
            <Text>{order.recipient.name}</Text>

            <Subtitle>Endereço da entrega</Subtitle>
            <Text>
              {order.recipient.street_name}, {order.recipient.number},{' '}
              {order.recipient.town} - {order.recipient.state},{' '}
              {order.recipient.postal_code}
            </Text>

            <Subtitle>Produto</Subtitle>
            <Text>{order.product}</Text>
          </DeliveryInfo>

          <DeliveryInfo>
            <Header>
              <Icon name="event" size={24} color="#7D40E7" />
              <Title>Situação da entrega</Title>
            </Header>

            <Subtitle>Status</Subtitle>
            <Text>{order.end_date ? 'Entregue' : 'Pendente'} </Text>

            <Dates>
              <Date>
                <Subtitle>Data da retirada</Subtitle>
                <Text>
                  {order.start_date ? order.startDateFormatted : '--/--/----'}
                </Text>
              </Date>
              <Date>
                <Subtitle>Data da entrega</Subtitle>
                <Text>
                  {order.end_date ? order.endDateFormatted : '--/--/----'}
                </Text>
              </Date>
            </Dates>
          </DeliveryInfo>

          <DeliveryActions>
            <Action onPress={handleStartDelivery} disabled={!!order.start_date}>
              <Icon
                name="unarchive"
                size={24}
                color={order.start_date || order.end_date ? '#999' : '#82BF18'}
              />
              <ActionText>Retirar encomenda</ActionText>
            </Action>
            <Action
              onPress={handleReportProblem}
              disabled={!order.start_date || order.end_date}
            >
              <Icon
                name="highlight-off"
                size={24}
                color={order.start_date && !order.end_date ? '#E74040' : '#999'}
              />
              <ActionText>Informar Problema</ActionText>
            </Action>
            <Action
              onPress={handleViewProblem}
              disabled={!order.start_date || order.end_date}
            >
              <Icon
                name="info-outline"
                size={24}
                color={order.start_date && !order.end_date ? '#E7BA40' : '#999'}
              />
              <ActionText>Visualizar Problema</ActionText>
            </Action>
            <Action
              onPress={handleConfirmDelivery}
              disabled={!order.start_date || order.end_date}
            >
              <Icon
                name="alarm-on"
                size={24}
                color={order.start_date && !order.end_date ? '#7D40E7' : '#999'}
              />
              <ActionText>Confirmar entrega</ActionText>
            </Action>
          </DeliveryActions>
        </Content>
      </Container>
    </>
  );
}

OrderDetails.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
