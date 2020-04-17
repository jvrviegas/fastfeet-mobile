import React from 'react';
import PropTypes from 'prop-types';

import CustomStyles from '~/components/CustomStyles';
import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      <Text disabled={loading} style={CustomStyles.baseText}>
        {children}
      </Text>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
