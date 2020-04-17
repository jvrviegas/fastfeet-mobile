import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  ProfileImg,
  Info,
  Title,
  Text,
  LogoutButton,
  LogoutText,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const deliveryman = useSelector((state) => state.auth.deliveryman);
  const image_url = deliveryman.avatar.url;
  const image_url_formatted = image_url.replace('localhost', '192.168.25.2');
  const createdAtFormatted = format(
    parseISO(deliveryman.createdAt),
    'dd/MM/yyyy'
  );

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ProfileImg
        source={{
          uri:
            image_url_formatted ||
            `https://ui-avatars.com/api/?name=${deliveryman.name}&background=F4EFFC&color=A28FD0&size=136`,
        }}
      />

      <Info>
        <Title>Nome completo</Title>
        <Text>{deliveryman.name}</Text>
      </Info>
      <Info>
        <Title>Email</Title>
        <Text>{deliveryman.email}</Text>
      </Info>
      <Info>
        <Title>Data de cadastro</Title>
        <Text>{createdAtFormatted}</Text>
      </Info>

      <LogoutButton onPress={handleSignOut}>
        <LogoutText>Logout</LogoutText>
      </LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ color, size }) => (
    <Icon name="account-circle" size={size} color={color} />
  ),
};
