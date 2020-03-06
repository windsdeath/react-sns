import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';

const NodeSNS = ({ Component, store, pageProps }) => (
  <Provider store={store}>
    <Head>
      <title>NodeSNS</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
    </Head>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </Provider>
);
NodeSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// context는 nextJS에서 내려주는 것(소스 다 뜯어볼거 아니면 몰라도 됨.)
NodeSNS.getInitialProps = async (context) => {
  console.log(context);
  // 여기에서 Component는 _app.jsx 외의 다른 페이지 (hashtag.jsx, index.jsx, profile.jsx, signup.jsx, user.jsx)를 말함
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx); // 이부분 context 안의 Component에 context.ctx를 props로 내려줌.
  }
  return { pageProps };
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(NodeSNS);
