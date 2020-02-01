import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout'
//  아래의 Component는 next때문에 가능함
const NodeSNS = ( {Component}) => {
    return (
    <>
        <Head>
            <title>NodeSNS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.7/antd.css" />
        </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
}

NodeSNS.propTypes = {
    Component: PropTypes.elementType,
}
 
export default NodeSNS;