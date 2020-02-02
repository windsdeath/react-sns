import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu,Input, Row,Col,Card,Avatar } from 'antd';
import LoginForm from '../pages/LoginForm';
import LogedInCard from '../pages/Card';

const dummy ={
    nickname: 'SIPO',
    Post:[],
    Follwings:[],
    Followers:[],
    isLoggedIn: false,
}

const AppLayout= ({children})=>{
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>NodeSNS</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
          <Row>
              <Col xs={24} md={24}></Col>
          </Row>
            <Row gutter={[16, 16]}type="flex" justify="space-around" align="top" style={{margin:"1%"}}>
                <Col xs={8} md={6}>
                    {dummy.isLoggedIn ? <LogedInCard /> : <LoginForm />
}
                </Col>
                <Col xs={8}md={12}>{children}</Col>
                <Col xs={8}md={6}>세번째줄</Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;

