import { Flex, Image, Space, Layout, Menu, type MenuProps } from 'antd'
import React, { useState } from 'react'
import { LookfinityLogoIcon } from '../../../assets'
import SearchBar from '../../../components/common/SearchBar'
import { Link, useLocation } from 'react-router-dom';

const {Header: AntHeader} = Layout;

const Header = () => {
  const [search, setSearch] = useState("")
  const location = useLocation()

  const items: MenuProps['items'] = [
    {
      key: '/',
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/courses',
      label: <Link to="/courses">Courses</Link>,
    },
  ]

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  }

  return (
    <AntHeader>
      <Space>
        <Image src={LookfinityLogoIcon} alt="logo" style={{marginLeft: "10px"}} />
        <SearchBar className='searchBar' name="search" onChange={handleSearchChange} type="text" placeholder="Search..." />
        <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={items}
        style={{ flex: 1 }}
      />
      </Space>
    </AntHeader>
  )
}

export default Header