import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import * as Toast from '~/components/Toast';

import api from '~/services/api';

import { Container, Content, Form, FormInput, SubmitButton } from './styles';

export default function ReportProblem({ navigation, route }) {
  const [description, setDescription] = useState('');
  const { order_id } = route.params;

  async function handleSubmit() {
    try {
      Toast.loading(true);
      await api.post(`/delivery/${order_id}/problems`, {
        description,
      });

      Toast.loading(false);
      Toast.success('Problema informado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Toast.error('Falha ao informar problema, tente novamente!');
      Toast.loading(false);
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Form>
            <FormInput
              placeholder="Inclua aqui o problema que ocorreu na entrega."
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={description}
              onChangeText={setDescription}
            />

            <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
          </Form>
        </Content>
      </Container>
    </>
  );
}

ReportProblem.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
