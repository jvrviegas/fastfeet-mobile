import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Content = styled.ScrollView`
  margin-top: -100px;
`;

export const DeliveryInfo = styled.View`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const DeliveryActions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #f8f9fd;
  border-radius: 4px;
`;

export const Dates = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
  margin-top: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Action = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 15px 15px;
  background: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.1)' : '#f8f9fd')};
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const ActionText = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.1)' : '#999')};
`;
