'use client'

import React from 'react';
import { Row, Col, Typography, Button, Space } from 'antd';
import { BookOutlined, ShareAltOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <Row justify="space-between" align="middle">
        <Col>
          <Typography.Title level={1}>El Aurassi Hotel</Typography.Title>
          <Typography.Paragraph style={{ fontSize: '1rem', color: '#555' }}>
            Spacious, modern rooms with panoramic views of the Mediterranean Sea.
          </Typography.Paragraph>
        </Col>
        <Col>
          <Space>
            <Button shape="circle" icon={<BookOutlined />} />
            <Button shape="circle" icon={<ShareAltOutlined />} />
            <Button type="primary" size="large" style={{ borderRadius: 20 }}>
              Reserve <ArrowRightOutlined />
            </Button>
          </Space>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ margin: '5px 0' }}>
        <Col xs={24} md={12}>
          <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            <Image src="/images/hero-1.png" alt="Hotel room" layout="fill" objectFit="cover" />
          </div>
        </Col>
        <Col xs={0} md={12}>
          <Row gutter={[8, 8]}>
            <Col span={24}><div style={{height: 246, overflow: 'hidden'}}><Image src="/images/hero-2.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
          </Row>
          <Row gutter={[8, 8]} style={{ margin: '5px 0' }}>
            <Col span={24}><div style={{height: 246, overflow: 'hidden',}}><Image src="/images/hero-3.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={[8, 8]} style={{ margin: '5px 0' }}>
        <Col xs={0} md={8}>
          <Row gutter={[8, 8]}>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-2.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-3.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
          </Row>
        </Col>
        <Col xs={0} md={8}>
          <Row gutter={[8, 8]}>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-2.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-3.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
          </Row>
        </Col>
        <Col xs={0} md={8}>
          <Row gutter={[8, 8]}>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-2.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
            <Col span={12}><div style={{position: 'relative', height: 246, overflow: 'hidden'}}><Image src="/images/hero-3.png" alt="detail" layout="fill" objectFit="cover" /></div></Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};
export default HeroSection;