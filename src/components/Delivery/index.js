/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryProgress from '~/components/DeliveryProgress';
import CustomStyles from '~/components/CustomStyles';

import {
  Container,
  Top,
  Mid,
  Bottom,
  DeliveryId,
  TextId,
  Info,
  Title,
  Text,
  MoreInfo,
  ButtonText,
} from './styles';

export default function Delivery({ data, handleSeeDetails }) {
  const status = data.end_date
    ? 'delivered'
    : data.start_date
    ? 'withdrawal'
    : 'waiting';

  return (
    <Container>
      <Top>
        <DeliveryId>
          <Icon name="local-shipping" size={24} color="#7D40E7" />
          <TextId>Encomenda {data.id < 10 ? `0${data.id}` : data.id}</TextId>
        </DeliveryId>
        {status === 'delivered' && (
          <Icon name="check-circle" size={30} color="#82BF18" />
        )}
      </Top>

      <Mid>
        <DeliveryProgress status={status} />
      </Mid>

      <Bottom>
        <Info>
          <Title>Data</Title>
          <Text>{data.createdAtFormatted}</Text>
        </Info>
        <Info>
          <Title>Cidade</Title>
          <Text>{data.recipient.town}</Text>
        </Info>
        <MoreInfo>
          <ButtonText onPress={handleSeeDetails} style={CustomStyles.baseText}>
            Ver detalhes
          </ButtonText>
        </MoreInfo>
      </Bottom>
    </Container>
  );
}
