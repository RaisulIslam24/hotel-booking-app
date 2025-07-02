'use client'

import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, GithubOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, AppleOutlined, AppstoreOutlined } from '@ant-design/icons';
import Image from 'next/image';
import NextLink from 'next/link';

const { Footer: AntFooter } = Layout;
const { Title, Text, Link: AntLink } = Typography;

const AppFooter = () => {
  const linkStyle: React.CSSProperties = {
    color: '#cbd5e1',
    textDecoration: 'none',
  };

  return (
    <AntFooter style={{ backgroundColor: '#00548C', color: '#cbd5e1', paddingTop: '48px', paddingBottom: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Row gutter={[16, 48]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} md={12}>
            <Image src="/images/logo.png" alt="DAYF Booking Logo" width={120} height={50} style={{ filter: 'brightness(0) invert(1)', marginBottom: 16 }} />
            <Text style={{ color: 'white', display: 'block', marginBottom: 16 }}>
              [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, we're here to help you find the perfect place to stay.
            </Text>
            <Space size="middle">
              <AntLink href="#" target="_blank" style={{ color: 'white', fontSize: '24px' }}><TwitterOutlined /></AntLink>
              <AntLink href="#" target="_blank" style={{ color: 'white', fontSize: '24px' }}><FacebookOutlined /></AntLink>
              <AntLink href="#" target="_blank" style={{ color: 'white', fontSize: '24px' }}><InstagramOutlined /></AntLink>
              <AntLink href="#" target="_blank" style={{ color: 'white', fontSize: '24px' }}><GithubOutlined /></AntLink>
            </Space>
            <br />
            <Space>
              <EnvironmentOutlined style={{ color: 'white', marginTop: 4 }} />
              <Text style={{ color: 'white' }}>123 Travel St, Suite 100, City, Country</Text>
            </Space>
          </Col>
          <hr className="hidden-mobile" style={{ height: '120px' }} />
          <Col xs={24} sm={12} md={5} style={{ color: 'white', textAlign: 'center' }}>
            <Space direction="vertical" size="small">
              <NextLink href="/" style={linkStyle}>Home</NextLink>
              <NextLink href="#" style={linkStyle}>Hotels</NextLink>
              <NextLink href="#" style={linkStyle}>Deals</NextLink>
              <NextLink href="#" style={linkStyle}>About Us</NextLink>
              <NextLink href="#" style={linkStyle}>Contact Us</NextLink>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Space direction="vertical" size="middle">
              <Space>
                <PhoneOutlined style={{ color: 'white' }} />
                <AntLink href="tel:+15551234567" style={{ color: '#cbd5e1' }}>+1 (555) 123-4567</AntLink>
              </Space>
              <Space>
                <MailOutlined style={{ color: 'white' }} />
                <AntLink href="mailto:support@yourappname.com" style={{ color: '#cbd5e1' }}>support@yourappname.com</AntLink>
              </Space>
            </Space>
            <Title level={4} style={{ color: 'white', marginBottom: '24px' }}>Download Our App <AppstoreOutlined /> <AppleOutlined /> </Title>
            <Text style={{ color: 'white', paddingTop: '20px'}}>© 2023, All Rights Reserved</Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default AppFooter;