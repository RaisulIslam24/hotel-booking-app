'use client'

import React from 'react';
import { Carousel, Card, Typography, Row, Col, Button, Space } from 'antd';
import { ExpandOutlined, StarFilled, InfoCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { recommendationsData } from '@/lib/data';
import type { Recommendation } from '@/lib/types';

const { Title, Text } = Typography;

const chunkArray = (array: any[], size: number) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
};

const RecommendationCard = ({ item }: { item: Recommendation }) => (
    <Card
        hoverable
        styles={{ body: { padding: 0 } }}
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <div style={{ position: 'relative', height: '200px' }}>
            <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
            <Text style={{ position: 'absolute', left: 12, bottom: 12, color: 'white' }}>
                <StarFilled style={{ color: 'gold' }} /> {item.rating}
            </Text>
        </div>
        <div style={{ padding: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <Title level={4} style={{ marginTop: 0 }}>{item.name}</Title>
                <Text type="secondary" style={{ flexGrow: 1, marginBottom: 16 }}>{item.description}</Text>
            
                <Row gutter={16} style={{ marginBottom: 16 }}>
                    <Col><Text type="secondary">{item.bedrooms} Bedroom</Text></Col>
                    <Col><Text type="secondary">{item.bathrooms} Bathroom</Text></Col>
                    <Col><Text type="secondary"><ExpandOutlined /> {item.size} sq ft</Text></Col>
                </Row>

                <Row justify="space-between" align="middle">
                    <Col>
                        <Title level={3} style={{ margin: 0 }}>{item.price} <Text>Per Night</Text></Title>
                    </Col>
                    <Col>
                        <Space.Compact>
                            <Button type="primary">Book Now</Button>
                            <Button icon={<InfoCircleOutlined />} />
                        </Space.Compact>
                    </Col>
                </Row>
            </div>
        </div>
    </Card>
);

const Recommendations = () => {
    const groupedRecommendations = chunkArray(recommendationsData, 6);

    return (
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={4} style={{ marginBottom: 24 }}>You may also like</Title>
            <Carousel autoplay dots>
                {groupedRecommendations.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <Row gutter={[16, 16]}>
                            {group.map((item) => (
                                <Col key={item.id} xs={24} sm={12} md={8}>
                                    <RecommendationCard item={item} />
                                </Col>
                            ))}
                        </Row>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};

export default Recommendations;