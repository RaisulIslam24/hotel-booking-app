'use client'

import React from 'react';
import { Row, Col, Typography, DatePicker, Button, Space, Card, Tag } from 'antd';
import { WifiOutlined, HomeOutlined, ApartmentOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;

const AvailabilitySection = () => {
    const defaultCheckIn = dayjs('2024-06-23');
    const defaultCheckOut = dayjs('2024-06-29');

    return (
        <section>
            <Row gutter={[32, 24]}>
            <Row gutter={[32, 24]}>
                <Col xs={24} md={16}>
                    <Title level={4}>Property Type</Title>
                    <Space size="middle">
                        <Text style={{ padding: '5px 10px', fontSize: '14px' }}>
                            <Tag icon={<HomeOutlined />}></Tag> Resorts
                        </Text>
                        <Text style={{ padding: '5px 10px', fontSize: '14px' }}>
                            <Tag icon={<ApartmentOutlined />}></Tag> 12000 sqft
                        </Text>
                    </Space>
                    <Title level={4}>Features</Title>
                    <Space wrap size={[8, 8]}>
                        <Text color="blue"><Tag icon={<WifiOutlined />}></Tag> Wifi</Text>
                        <Text color="cyan"><Tag icon={<HomeOutlined />}></Tag> Dining</Text>
                        <Text color="green"><Tag icon={<HomeOutlined />}></Tag> Swimming Pool</Text>
                        <Text color="purple"><Tag icon={<HomeOutlined />}></Tag> Air Conditioning</Text>
                        <Text color="orange"><Tag icon={<HomeOutlined />}></Tag> Gym</Text>
                    </Space>
                </Col>
            </Row>
            
            <Col xs={24} md={8}>
              <Card style={{ paddingTop: '20px', paddingBottom: '30px' }}>
                <Text type="secondary">1 week, 2 adults, 1 child</Text>
                <Title level={2} style={{ marginTop: '8px', marginBottom: '8px' }}>USD $6,112</Title>
                <Button type="primary" size="large" block style={{ borderRadius: '25px', height: '50px' }}>
                    Reserve
                </Button>
                </Card>
            </Col>
          </Row>
          <Title level={4} style={{ marginTop: 32, marginBottom: 16 }}>Availability</Title>
            <Card>
                <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} md={12} lg={10}>
                        <Text type="secondary">Check-In & Check-Out</Text>
                        <RangePicker 
                            defaultValue={[defaultCheckIn, defaultCheckOut]}
                            size="large" 
                            style={{ width: '100%' }}
                            format="ddd, D MMM YYYY"
                        />
                    </Col>
                    <Col xs={24} md={6} lg={6}>
                        <Text type="secondary">Room & Guest</Text>
                        <Button size="large" block icon={<UserOutlined />}>
                            2 Adults - 0 Children
                        </Button>
                    </Col>
                    <Col xs={24} md={6} lg={4}>
                        <Button style={{ marginTop: 20 }} type="primary" size="large" block>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Card>
        </section>
    );
};

export default AvailabilitySection;