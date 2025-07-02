'use client'

import React from 'react';
import { Card, Typography, Divider, Space, Col, Row } from 'antd';

const { Title, Text, Link } = Typography;

const PolicyItem = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div>
        <Row>
            <Col xs={24} md={12}>
            <Title level={5} style={{ marginBottom: '8px' }}>{title}</Title>
            </Col>
            <Col xs={24} md={12}>
            <div style={{ color: '#595959' }}>
                {children}
            </div>
            </Col>
        </Row>
    </div>
);

const Policies = () => {
  return (
    <section>
        <Title level={4} style={{marginBottom: 24}}>Policies</Title>
        <Card>
            <Space direction="vertical" size="middle" style={{ width: '100%' }} split={<Divider style={{ margin: 0 }} />}>
                
                <PolicyItem title="Check-in">
                    <Text>Available 24 hours</Text>
                    <br/>
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                        Guests are required to show a photo identification and credit card upon check-in. Please let the property know in advance what time you&apos;ll arrive.
                    </Text>
                </PolicyItem>
                
                <PolicyItem title="Check-out">
                    <Text>Available 24 hours</Text>
                </PolicyItem>

                <PolicyItem title="Cancellation/prepayment">
                    <Text>
                        Cancellation and prepayment policies vary according to accommodation type. Please check what <Link href="#">conditions</Link> may apply to each option when making your selection.
                    </Text>
                </PolicyItem>

                <PolicyItem title="Children and beds">
                    <Text strong>Child policies:</Text>
                    <Text> Children of any age are welcome.</Text>
                    <br/>
                    <Text>Children 12 years and above will be charged as adults at this property.</Text>
                    <br/><br/>
                    <Text strong>Cot and extra bed policies:</Text>
                    <Text> The number of extra beds allowed is dependent on the option you choose. There are no cots available at this property. All extra beds are subject to availability.</Text>
                </PolicyItem>

                <PolicyItem title="No age restriction">
                    <Text>There is no age requirement for check-in</Text>
                </PolicyItem>

                <PolicyItem title="Pets">
                    <Text>Pets are not allowed.</Text>
                </PolicyItem>
                
                <PolicyItem title="Cash only">
                    <Text>This property only accepts cash payments.</Text>
                </PolicyItem>

            </Space>
        </Card>
    </section>
  );
};

export default Policies;