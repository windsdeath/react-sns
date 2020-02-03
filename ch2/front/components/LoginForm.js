import Link from 'next/link';
import { Input, Button, Form } from 'antd';
import { useCallback } from 'react';

import {useInput} from '../pages/signup';

const LoginForm = () => {
    const[id, onChangeId] = useInput('');
    const[password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id, password,
        }, [id,password])
    })

    return (
        <Form onSubmit={onSubmitForm}>
            <div style={{margin:"5px"}}>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div style={{margin:"5px"}}>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <div style={{margin:"5px"}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    )
}

export default LoginForm
