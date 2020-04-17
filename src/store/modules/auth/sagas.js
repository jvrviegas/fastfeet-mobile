import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as Toast from '~/components/Toast';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    Toast.loading(true);
    const { id } = payload;

    const response = yield call(api.get, `deliverymans/${id}`);

    const deliveryman = response.data;

    yield put(signInSuccess(deliveryman));

    Toast.loading(false);
    // history.push('/dashboard/orders');
  } catch (error) {
    Toast.loading(false);
    Toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
