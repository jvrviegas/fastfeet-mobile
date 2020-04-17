import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const BaseText = styled.Text``;

export const Top = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const DeliveryId = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextId = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Mid = styled.View``;

export const ProgressBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProgressText = styled.Text`
  font-size: 8px;
  color: #999;
`;

export const Bottom = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
  margin-top: 20px;
  background: #f8f9fd;
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-size: 8px;
  color: #999;
`;

export const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const MoreInfo = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
`;
