import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form } from 'antd';

const Signup = () => {
    return <>
    <Head>
            <title>NodeSNS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.7/antd.css" />
        </Head>
    
    <AppLayout>
        <Form onSubmit={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label>
                <br />
                <Input name="user-nick" required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-pass">비밀번호</label>
                <br />
                <Input name="user-pass" type="password" required onChange={onChangePassword} />
                <label htmlFor="user-pass-chk">비밀번호체크</label>
                <br />
                <Input name="user-pass-chk" type="password" required onChange={onChangePasswordChk} />
            </div>
        </Form>
    <div>
        회원가입
    </div>
    </AppLayout>
    </>
};

export default Signup;