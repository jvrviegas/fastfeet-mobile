import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Content = styled.View`
  margin-top: -100px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  border: 1px solid #0000001a;
  border-radius: 4px;
  background: #fff;
  height: 300px;
  padding: 20px;
  font-size: 16px;
  color: #999;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #7d40e7;
`;
