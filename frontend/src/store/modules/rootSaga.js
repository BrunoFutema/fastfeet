import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import order from './order/sagas';
import recipient from './recipient/sagas';
import deliveryman from './deliveryman/sagas';

export default function* rootSaga() {
  return yield all([auth, user, order, recipient, deliveryman]);
}
