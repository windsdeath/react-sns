import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import {Provider } from 'react-redux';

import reducer from '../reducers';
import { initialState } from '../reducers/user';
import { createStore, compose, applyMiddleware } from 'redux';

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
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares), 
    // 서버에서는 typeof windows !== 'undefined' 를 !options.isServer 로 대체해야 함
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  )
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 스토어 커스터마이징
  return store;
})(NodeSNS);
