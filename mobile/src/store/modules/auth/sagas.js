import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliverymanId } = payload;

    const resp = yield call(api.get, `/deliverymen/${deliverymanId}`);
    const deliveryman = resp.data;

    yield put(signInSuccess(deliveryman));
  } catch {
    Alert.alert('Falha na autenticação.', 'Verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
