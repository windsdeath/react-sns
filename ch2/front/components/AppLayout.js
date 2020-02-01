import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu,Input, Button } from 'antd';

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
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node,
}

export default AppLayout;

