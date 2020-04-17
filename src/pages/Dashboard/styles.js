import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const Span = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 15px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-right: auto;
`;

export const Filter = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.isActive ? '#7D40E7' : '#999')};
  text-decoration: ${(props) => (props.isActive ? 'underline' : 'none')};
  margin-left: 15px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 10 },
})``;

export const Text = styled.Text`
  align-self: center;
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

export const UpdateList = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #7d40e7;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
  padding: 5px 10px;
`;

export const UpdateListText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
