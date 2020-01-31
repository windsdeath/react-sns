import React, {useState} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form,Input, Checkbox, Button } from 'antd';

const Signup = () => {
    
    const [id, setId] = useState('')    
    const [nick, setNick] = useState('')    
    const [password, setPassword] = useState('')    
    const [passwordCheck, setPasswordCheck] = useState('')    
    const [term, setTerm] = useState(false)  
    const [passwordError, setPasswordError] = useState(false)
    const [termError, setTermError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        })
    }

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangeNick = (e) => {
        setNick(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }
    
    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }

    return <>
    <Head>
            <title>NodeSNS</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.26.7/antd.css" />
        </Head>
    
    <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding:"30vw" }}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick">닉네임</label>
                <br />
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
                <label htmlFor="user-password-check">비밀번호체크</label>
                <br />
                <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                {passwordError && <div style={{color:"red"}}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                {termError && <div style={{color:"red"}}>약관에 동의하셔야합니다.</div>}
            </div>
            <div style={{marginTop:"10px"}}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>

        </Form>
    <div>
        회원가입
    </div>
    </AppLayout>
    </>
};

export default Signup;