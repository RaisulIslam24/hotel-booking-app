'use client'

import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutProperty = () => {
  return (
    <section>
      <Title level={4} style={{ marginBottom: '16px' }}>
        About this property
      </Title>
      <Paragraph style={{ color: '#595959', fontSize: '16px', lineHeight: '1.7' }}>
        The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience tailored for both business and leisure travelers. With its modern design and panoramic views of the Mediterranean Sea, the suite combines comfort, elegance, and functionality. The marble bathroom with its bathtub offers pure luxury. The location is perfect for exploring the city, and the amenities provided were top-notch.
      </Paragraph>
    </section>
  );
};

export default AboutProperty;