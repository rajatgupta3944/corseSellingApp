import {
  Flex,
  Image,
  Space,
  Layout,
  Menu,
  type MenuProps,
  Popover,
} from "antd";
import React, { useState } from "react";
import { LookfinityLogoIcon } from "../../../assets";
import SearchBar from "../../../components/common/SearchBar";
import { Link, useLocation } from "react-router-dom";
import CourseAvatar from "../../../components/common/CourseAvatar";
import Profile from "../../profile/Profile";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      key: "/",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "/courses",
      label: <Link to="/courses">Courses</Link>,
    },
    {
      key: "/help",
      label: <Link to="/help">Help</Link>,
    },
    {
      key: "/cart",
      label: <Link to="/cart">Cart</Link>,
    },
  ];

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <AntHeader style={{ overflow: "visible" }}>
      <Flex justify="space-between">
        <Space>
          <Image src={LookfinityLogoIcon} alt="logo" />
          <SearchBar
            className="searchBar"
            name="search"
            onChange={handleSearchChange}
            type="text"
            placeholder="Search..."
          />
        </Space>
        <Space>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={items}
            // style={{ flex: 1 }}
          />

          <Popover
            content={<Profile />}
            trigger="click"
            placement="bottomRight"
          >
            <span>
              <CourseAvatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg/250px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality_-_JPEG_compression.jpg" />
            </span>
          </Popover>
        </Space>
      </Flex>
    </AntHeader>
  );
};

export default Header;
