import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/fastfeet-white-logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const [deliverymanId, setDeliverymanId] = useState('');
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={deliverymanId}
          onChangeText={setDeliverymanId}
        />
        <SubmitButton loading={loading} onPress={handleSubmit}>
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
