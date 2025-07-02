'use client'

import React from 'react';
import { Row, Col, Typography, Space, List, Button } from 'antd';
import { ShopOutlined, CoffeeOutlined, FlagOutlined, CarOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { exploreData } from '@/lib/data';

const { Title, Text } = Typography;

const CategoryList = ({ title, icon, data }: { title: string; icon: React.ReactNode; data: { name: string; distance: string }[] }) => (
    <div>
        <Title level={5} style={{ marginBottom: 16 }}>
            <Space>
                {icon}
                {title}
            </Space>
        </Title>
        <List
            dataSource={data}
            renderItem={item => (
                <List.Item style={{ borderBlockEnd: 'none', padding: '8px 0' }}>
                    <Text>{item.name}</Text>
                    <Text type="secondary">{item.distance}</Text>
                </List.Item>
            )}
        />
    </div>
);

const ExploreArea = () => {
  return (
    <section>
      <Title level={4} style={{ marginBottom: '24px' }}>
        Explore the Area
      </Title>
      <Row gutter={[32, 24]}>
        <Col xs={24} md={16}>
            <Row gutter={[32, 24]}>
                <Col xs={24} sm={12}>
                    <CategoryList title="Restaurants & cafes" icon={<CoffeeOutlined />} data={exploreData.restaurants} />
                </Col>
                <Col xs={24} sm={12}>
                    <CategoryList title="Shops & Markets" icon={<ShopOutlined />} data={exploreData.markets} />
                </Col>
                <Col xs={24} sm={12}>
                    <CategoryList title="Beaches" icon={<FlagOutlined />} data={exploreData.beaches} />
                </Col>
                <Col xs={24} sm={12}>
                    <CategoryList title="Public transport" icon={<CarOutlined />} data={exploreData.transport} />
                </Col>
            </Row>
        </Col>

        <Col xs={24} md={8}>
            <div style={{ position: 'relative', width: '100%', minHeight: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                <Image src="/images/map.png" alt="Map of the area" layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                    <Button type="primary" block size="large">
                        Explore the Area
                    </Button>
                </div>
            </div>
        </Col>
      </Row>
    </section>
  );
};

export default ExploreArea;