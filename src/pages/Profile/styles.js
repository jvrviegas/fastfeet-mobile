import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 36px;
`;

export const ProfileImg = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  margin: 20px auto;
`;

export const Info = styled.View`
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 30px;
  background: #e74040;
  height: 46px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const LogoutText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
