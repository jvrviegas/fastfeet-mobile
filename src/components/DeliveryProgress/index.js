import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  DeliveryStatus,
  Badge,
  Line,
  Steps,
  Step,
  StepText,
} from './styles';

export default function DeliveryProgress({ status }) {
  let withdraw = false;
  let delivered = false;

  if (status === 'withdrawal') withdraw = true;
  if (status === 'delivered') {
    withdraw = true;
    delivered = true;
  }

  return (
    <Container>
      <DeliveryStatus>
        <Badge active />
        <Line />
        <Badge active={withdraw} />
        <Line />
        <Badge active={delivered} />
      </DeliveryStatus>
      <Steps>
        <Step>
          <StepText>Aguardando Retirada</StepText>
        </Step>
        <Step>
          <StepText>Retirada</StepText>
        </Step>
        <Step>
          <StepText>Entregue</StepText>
        </Step>
      </Steps>
    </Container>
  );
}

DeliveryProgress.propTypes = {
  status: PropTypes.string,
};

DeliveryProgress.defaultProps = {
  status: '',
};
