import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import ImageResizer from 'react-native-image-resizer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { requestReload } from '~/store/modules/reload/actions';

import Background from '~/components/Background';
import * as Toast from '~/components/Toast';

import {
  Container,
  Content,
  CameraContainer,
  Camera,
  TakePicture,
  TakePictureButton,
  SubmitButton,
  SubmitButtonText,
} from './styles';

export default function ConfirmDelivery({ navigation, route }) {
  const [preview, setPreview] = useState(false);
  const [signature, setSignature] = useState('');
  const { order_id, deliveryman_id } = route.params;
  const dispatch = useDispatch();

  let camera;

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        orientation: 'auto',
        fixOrientation: true,
        pauseAfterCapture: true,
      };
      const data = await camera.takePictureAsync(options);
      setSignature(data.uri);
      setPreview(true);
    }
  }

  function handleResumePreview() {
    setPreview(false);
    camera.resumePreview();
  }

  async function handleSubmit() {
    if (signature) {
      Toast.loading(true);
      const resizedImage = await ImageResizer.createResizedImage(
        signature,
        500,
        300,
        'JPEG',
        100,
        0,
        null
      );

      try {
        const data = new FormData();

        data.append('file', {
          uri: resizedImage.uri,
          name: resizedImage.name,
          type: 'image/jpg',
        });

        await api.put(
          `/deliveryman/${deliveryman_id}/end_delivery/${order_id}`,
          data
        );

        Toast.loading(false);
        Toast.success('Entrega confirmada com sucesso!');
        dispatch(requestReload(true));
        navigation.navigate('Deliveries');
      } catch (error) {
        Toast.error('Erro ao processar sua requisição');
        console.tron.log(error);
      }
    } else {
      Toast.error('Você precisa tirar uma foto da assinatura do destinatário');
    }
  }

  return (
    <>
      <Background />
      <Container>
        <Content>
          <CameraContainer>
            <Camera
              ref={(ref) => {
                camera = ref;
              }}
              type={Camera.Constants.Type.back}
              flashMode={Camera.Constants.FlashMode.auto}
              autoFocus={Camera.Constants.AutoFocus.on}
              playSoundOnCapture
              androidCameraPermissionOptions={{
                title: 'Permissão para uso da câmera',
                message: 'Precisamos da permissão para usar sua câmera',
                buttonPositive: 'Permitir',
                buttonNegative: 'Cancelar',
              }}
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.tron.log(barcodes);
              }}
            />
            <TakePicture>
              {preview ? (
                <TakePictureButton onPress={handleResumePreview}>
                  <Icon name="close" size={40} color="#fff" />
                </TakePictureButton>
              ) : (
                <TakePictureButton onPress={handleTakePicture}>
                  <Icon name="camera-alt" size={40} color="#fff" />
                </TakePictureButton>
              )}
            </TakePicture>
          </CameraContainer>
          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitButtonText>Enviar</SubmitButtonText>
          </SubmitButton>
        </Content>
      </Container>
    </>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape().isRequired,
  route: PropTypes.shape().isRequired,
};
