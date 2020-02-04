import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeSNS = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeSNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

NodeSNS.propTypes = {
  Component: PropTypes.elementType,
};

export default NodeSNS;
