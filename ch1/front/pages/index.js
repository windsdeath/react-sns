import React from 'react';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Home = () => {
    return(
        <>
        <Head>
            <title>NodeSNS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.7/antd.css" />
        </Head>
            <AppLayout>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;