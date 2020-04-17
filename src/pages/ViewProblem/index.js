import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { ActivityIndicator } from 'react-native';

import Background from '~/components/Background';

import api from '~/services/api';

import {
  Container,
  Content,
  Title,
  ProblemsList,
  ProblemContent,
  ProblemDescription,
  ProblemDate,
} from './styles';

export default function ViewProblem({ route }) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState('');
  const { order_id } = route.params;

  useEffect(() => {
    async function loadDeliveryProblems() {
      setLoading(true);
      const response = await api.get(`delivery/${order_id}/problems`);

      const data = response.data.map((problem) => ({
        ...problem,
        createdAtFormatted: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
      }));

      setProblems(data);
      setLoading(false);
    }

    loadDeliveryProblems();
  }, []);

  return (
    <>
      <Background />
      <Container>
        <Content>
          <Title>Encomenda {order_id < 10 ? `0${order_id}` : order_id}</Title>

          {loading ? (
            <ActivityIndicator
              size={50}
              color="#7D40E7"
              style={{ marginTop: 80, marginBottom: 'auto' }}
            />
          ) : (
            <ProblemsList
              data={problems}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <>
                  <ProblemContent>
                    <ProblemDescription>{item.description}</ProblemDescription>
                    <ProblemDate>{item.createdAtFormatted}</ProblemDate>
                  </ProblemContent>
                </>
              )}
            />
          )}
        </Content>
      </Container>
    </>
  );
}

ViewProblem.propTypes = {
  route: PropTypes.shape().isRequired,
};
