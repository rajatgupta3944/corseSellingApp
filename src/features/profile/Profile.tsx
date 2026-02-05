import { Card, Avatar, Typography, Divider, Button, Flex } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined, CodeOutlined } from '@ant-design/icons'
import CourseAvatar from '../../components/common/CourseAvatar';
import CourseButton from '../../components/common/CourseButton';
import UserData from '../../data/userData.json';
 
const Profile = () => {
  const { Text } = Typography;

  return (
    <Card style={{ width: 260, borderRadius: 12 }}>
      <Flex align="center" gap={12}>
        <CourseAvatar src={UserData?.image} name="Rajat" />
        <Flex vertical>
          <Text strong>{UserData?.name}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            {UserData?.email}
          </Text>
        </Flex>
      </Flex>

      <Divider />

      <Flex vertical gap={8}>
        <CourseButton type="text" label="My Courses" icon={<CodeOutlined />} block />
        <CourseButton type="text" label="Settings" icon={<SettingOutlined />} block />
        <CourseButton type="text" label="Logout" danger icon={<LogoutOutlined />} block />
      </Flex>
    </Card>
  )
}

export default Profile
