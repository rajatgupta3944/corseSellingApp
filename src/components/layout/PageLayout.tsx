import React, { type ReactNode } from 'react'
import Header from '../../features/header/components/Header'
import Footer from './Footer'
import { Layout } from 'antd'

const {Content} = Layout;

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({children}: PageLayoutProps) => {
  return (
    <Layout className='appLayout'>
      <Header />
      <Content className='appContent'>
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}

export default PageLayout