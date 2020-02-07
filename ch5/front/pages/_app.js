import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import {Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const NodeSNS = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeSNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
};

const configureStore = (initialState, options) => {
  
  const sagaMiddleware = createSagaMiddleware();
  
  // 넣고싶은 미들웨어 나열
  const middlewares = [sagaMiddleware];
  // 프로덕션(배포에서는 데브툴즈 익스텐션 안씀)
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      // 서버에서는 typeof windows !== 'undefined' 를 !options.isServer 로 대체해야 함
      // 배포할때는 익스텐션 뺴야함
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );

  const store = createStore(reducer, initialState, enhancer);
  // 여기에 스토어 커스터마이징
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(NodeSNS);