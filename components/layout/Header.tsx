'use client';

import React from 'react';
import Image from 'next/image';
import { Button, Dropdown, Space, theme } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, MessageOutlined, UserOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Header = () => {
    const { useToken } = theme;
    const { token } = useToken();

    const currencyItems: MenuProps['items'] = [
        { key: '1', label: 'USD' },
        { key: '2', label: 'GBP' },
    ];

    const langItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Space>
                    <Image src="https://flagcdn.com/gb.svg" width={20} height={15} alt="UK Flag"/>
                    <span>English</span>
                </Space>
            )
        },
    ];

    const linkStyle: React.CSSProperties = {
        color: token.colorLink,
        textDecoration: 'none',
        transition: 'color 0.3s',
    };

    return (
        <header style={{ background: '#fff', borderBottom: '1px solid #f0f0f0', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', maxWidth: '1200px', margin: '0 auto' }}>
                <Space size="large">
                    <Image src="/images/logo.png" alt="DAYF Booking Logo" width={100} height={40} />
                    <Space className="hidden-mobile">
                        <Link href="/" style={linkStyle}>Home</Link>
                        <Link href="#" style={linkStyle}>Hotels</Link>
                        <Link href="#" style={linkStyle}>House</Link>
                        <Link href="#" style={linkStyle}>About Us</Link>
                        <Link href="#" style={linkStyle}>Contact Us</Link>
                    </Space>
                </Space>
                <Space>
                    <Dropdown menu={{ items: currencyItems }}>
                        <Button>€ <DownOutlined /></Button>
                    </Dropdown>

                    <Dropdown menu={{ items: langItems }}>
                        <Button icon={<Image src="https://flagcdn.com/es.svg" width={20} height={15} alt="Spanish Flag"/>}>
                           <DownOutlined />
                        </Button>
                    </Dropdown>
                    
                    <Button type="text" className="hidden-mobile">List your property <ArrowRightOutlined /></Button>
                    <Button type="text" icon={<MessageOutlined />} />
                    <Button type="text" icon={<UserOutlined />}>Sunan</Button>
                </Space>
            </div>
        </header>
    );
};

export default Header;