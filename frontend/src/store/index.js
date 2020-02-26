import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers';
import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const store = createStore(persistReducers(reducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
