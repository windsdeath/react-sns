import React, {useState, useCallback} from 'react';
import { Form,Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';

const TextInput = ({ value }) => {
    return(
        <div>{value}</div>
    )
}

TextInput.propTypes={
    value:PropTypes.string,
}

const Signup = () => {
    
    const [id, setId] = useState('')    
    const [nick, setNick] = useState('')    
    const [password, setPassword] = useState('')    
    const [passwordCheck, setPasswordCheck] = useState('')    
    const [term, setTerm] = useState(false)  
    const [passwordError, setPasswordError] = useState(false)
    const [termError, setTermError] = useState(false)



    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangeNick = (e) => {
        setNick(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
    }, [password, passwordCheck, term])

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password])
    
    
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    },[])
    // costom Hook
    const useInput = (initValue = null) => {
        const [value,setter] = useState(initValue)
        const handler =useCallback((e) => {
            setter(e.target.value)
        },[])
        return [value, handler]
    }

    // const [id, onChangeId] = useInput('')

    return <>
        <Form onSubmit={onSubmit} >
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
            {/* value={term} 아랫줄 체크박스 안에넣으면 콘솔 에러남 -> value를 checked로 변경  */}
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                {termError && <div style={{color:"red"}}>약관에 동의하셔야합니다.</div>}
            </div>
            <div style={{marginTop:"10px"}}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>

        </Form>
    </>
};

export default Signup;