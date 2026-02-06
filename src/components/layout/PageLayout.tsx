import React, { type ReactNode } from 'react'
import Header from '../../features/header/components/Header'
import Footer from './Footer'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom';

const {Content} = Layout;

interface PageLayoutProps {
}

const PageLayout = () => {
  return (
    <Layout className='appLayout' style={{ flex: 1 }} >
      <Header />
      <Content className='appContent' style={{ flex: 1, backgroundColor: "#030712", paddingBottom: "20px" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default PageLayout