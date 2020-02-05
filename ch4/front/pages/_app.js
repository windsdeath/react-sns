import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import {Provider } from 'react-redux';
import sagaMiddleware from '../sagas/middleware'

import reducer from '../reducers';
// import { initialState } from '../reducers/user';
import { createStore, compose, applyMiddleware } from 'redux';
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
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(
      applyMiddleware(...middlewares), 
      // 서버에서는 typeof windows !== 'undefined' 를 !options.isServer 로 대체해야 함
      // 배포할때는 익스텐션 뺴야함
      !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    )
    :compose(
    applyMiddleware(...middlewares), 
    ); 
    
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 스토어 커스터마이징
  sagaMiddleware.run(rootSaga);
  return store;
})(NodeSNS);
