import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 20px;
`;

export const Content = styled.ScrollView`
  background: #fff;
  margin-top: -100px;
`;

export const CameraContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: black;
  border-radius: 4px;
  min-width: 335px;
  min-height: 335px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const TakePicture = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TakePictureButton = styled.TouchableOpacity`
  padding: 15px;
  align-self: center;
  margin: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #0000004d;
  border-radius: 40px;
  width: 80px;
  height: 80px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 50px;
  background: #7d40e7;
  height: 46px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
