'use client';

import { Layout, Space } from 'antd';
import Header from "@/components/layout/Header";
import HeroSection from '@/components/hotel/HeroSection';
import RoomList from '@/components/hotel/RoomList';
import GuestReviews from '@/components/hotel/GuestReviews';
import Policies from '@/components/hotel/Policies';
import Footer from '@/components/layout/Footer';
import AvailabilitySection from '@/components/hotel/AvailabilitySection';
import AboutProperty from '@/components/hotel/AboutProperty';
import ExploreArea from '@/components/hotel/ExploreArea';
import Recommendations from '@/components/hotel/Recommendations';

const { Content } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 48px', marginTop: 32, maxWidth: '1200px', margin: '32px auto', width: '100%' }}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <HeroSection />
            <AvailabilitySection />
            <RoomList />
            <AboutProperty />
            <ExploreArea />
            <GuestReviews />
            <Policies />
            <div style={{ background: '#f5f5f5', padding: '48px 0' }}>
              <Recommendations />
            </div>
            <Footer />
        </Space>
      </Content>
    </Layout>
  );
}