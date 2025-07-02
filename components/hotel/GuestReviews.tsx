'use client'

import React from 'react';
import { Carousel, Card, Typography, Rate, Row, Col } from 'antd';
import { reviewsData } from '@/lib/data';
import type { Review } from '@/lib/types';

const chunkArray = (array: any[], size: number) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
};

const ReviewCard = ({ review }: { review: Review }) => (
    <Card style={{ margin: '0 10px' }}>
        <Typography.Title level={4}>{review.quote}</Typography.Title>
        <Typography.Text>{review.description}</Typography.Text>
        <br />
        <Rate disabled defaultValue={review.rating} />
        <br />
        <Typography.Text strong style={{ fontSize: "1.2rem" }}>— {review.author}, {review.location}</Typography.Text>
    </Card>
);

const GuestReviews = () => {
    const groupedReviews = chunkArray(reviewsData, 2);

    return (
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <Typography.Title level={4} style={{ margin: 0 }}>What Our Guests Say</Typography.Title>
                <Typography.Link href="#">See All →</Typography.Link>
            </div>
            <div className="show-on-mobile">
                <Carousel autoplay dots>
                    {reviewsData.map(review => (
                        <div key={review.id} style={{ padding: '0 8px' }}>
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="hidden-mobile">
                <Carousel autoplay dots>
                    {groupedReviews.map((reviewPair, index) => (
                        <div key={index}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    {/* Ensure we don't render a column if the pair is incomplete */}
                                    {reviewPair[0] && <ReviewCard review={reviewPair[0]} />}
                                </Col>
                                <Col span={12}>
                                    {reviewPair[1] && <ReviewCard review={reviewPair[1]} />}
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default GuestReviews;
