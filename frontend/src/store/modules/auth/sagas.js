import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signInFail } from './actions';

function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const resp = yield call(api.post, '/sessions', { email, password });
    const { token, user } = resp.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/deliveries');
  } catch {
    toast.error('Falha na autenticação. Verifique seus dados.');
    yield put(signInFail());
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
