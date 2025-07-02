'use client'

import React from 'react';
import { Card, Row, Col, Typography, Space, Select, Button } from 'antd';
import { UserOutlined, ArrowsAltOutlined, WifiOutlined, CrownOutlined, PropertySafetyOutlined, ThunderboltOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { roomsData } from '@/lib/data';
import type { Room } from '@/lib/types';

const { Title, Text } = Typography;
const { Option } = Select;

const ListHeader = () => (
    <Row style={{ padding: '12px 24px', color: 'white', backgroundColor:'#007DD0' }}>
        <Col xs={0} md={16}>
            <Row>
                <Col span={14}>Room type</Col>
                <Col span={10} style={{ textAlign: 'center' }}>Number of guests</Col>
            </Row>
        </Col>
        <Col xs={0} md={8}>
            <Row justify="space-between" style={{ paddingLeft: '24px' }}>
                <Col>Price / week</Col>
                <Col>Choices</Col>
            </Row>
        </Col>
    </Row>
);

const Amenity = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <Space>
        {icon}
        <Text type="secondary">{label}</Text>
    </Space>
);

const RoomCard = ({ room }: { room: Room }) => {
    return (
        <Card styles={{ body: { padding: 0 } }}>
            <Row>
                <Col xs={24} md={16} style={{ padding: '24px' }}>
                    <Row align="middle">
                        <Col xs={24} lg={14}>
                            <Title level={5} style={{ marginTop: 0, color: '#007DD0' }}>{room.type}</Title>
                            <Space wrap size="large" style={{ marginBottom: 24 }}>
                                <Space><CrownOutlined /><Text>{room.beds}</Text></Space>
                                <Space><ArrowsAltOutlined /><Text>{room.size} sq ft</Text></Space>
                            </Space>
                            <Row gutter={[16, 8]}>
                                <Col xs={12}><Amenity icon={<ThunderboltOutlined />} label="Air condition" /></Col>
                                <Col xs={12}><Amenity icon={<PropertySafetyOutlined />} label="Bathroom" /></Col>
                                <Col xs={12}><Amenity icon={<CheckSquareOutlined />} label="TV" /></Col>
                                <Col xs={12}><Amenity icon={<WifiOutlined />} label="WIFI" /></Col>
                            </Row>
                        </Col>
                        <Col xs={0} lg={10} style={{ textAlign: 'center' }}>
                             <Space size="small"><UserOutlined /><UserOutlined /></Space>
                        </Col>
                    </Row>
                </Col>

                <Col xs={24} md={8} style={{ background: '#fafafa', borderTop: '1px solid #f0f0f0', borderLeft: '1px solid #f0f0f0' }}>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                        <Row justify="space-between" align="top">
                            <Col>
                                <Title level={4} style={{ marginTop: 0, marginBottom: 0 }}>${room.price}</Title>
                                <Text type="secondary">Price for 1 week</Text>
                            </Col>
                            <Col>
                                <Select defaultValue="0" size="large" style={{ minWidth: '70px' }}>
                                    <Option value="0">0</Option>
                                    <Option value="1">1</Option>
                                </Select>
                            </Col>
                        </Row>
                        <div style={{ margin: '16px 0' }}>
                            <Text strong style={{ color: 'green' }}>Breakfast included</Text><br />
                            <Text type="danger" strong>Only {room.roomsLeft} rooms left</Text>
                        </div>
                        <Button type="primary" size="large" block>Reserve</Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

const RoomList = () => {
    return (
        <section>
            <div className="hidden-mobile">
                <ListHeader />
            </div>
            <Title level={2} className="show-on-mobile" style={{ marginBottom: 16 }}>Room type</Title>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {roomsData.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </Space>
        </section>
    );
};

export default RoomList;