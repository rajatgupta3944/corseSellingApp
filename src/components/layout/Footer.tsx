import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Footer: LibFooter } = Layout;


const Footer = () => {
  return (
    <LibFooter style={{ textAlign: 'center', borderTop: '1px solid #737373' }}>
      Full stack courses ©{new Date().getFullYear()} All rights reserved.
    </LibFooter>
  )
}

export default Footer