import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/fastfeet-white-logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  function handleSubmit() {}

  return (
    <Background>
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
          />
          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
