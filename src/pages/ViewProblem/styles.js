import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Content = styled.View`
  margin-top: -100px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const ProblemsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 10 },
})``;

export const ProblemContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  border: 1px solid #0000001a;
  border-radius: 4px;
  margin-top: 15px;
`;

export const ProblemDescription = styled.Text`
  font-size: 16px;
  color: #999;
  width: 75%;
`;

export const ProblemDate = styled.Text`
  font-size: 12px;
  color: #c1c1c1;
`;
