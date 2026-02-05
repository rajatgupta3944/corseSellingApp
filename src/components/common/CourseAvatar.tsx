import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import {avatarCharacter} from '../../utils/helpers'

interface CourseAvatarProps {
  src?: string;
  name?: string;
}

const CourseAvatar: React.FC<CourseAvatarProps> = ({ src, name }) => (
  !src ? (
    <Avatar style={{ backgroundColor: '#fde3cf', cursor: 'pointer' , color: '#f56a00' }}>
      {avatarCharacter(name)}
    </Avatar>
  ) : (
    <Avatar style={{ backgroundColor: '#87d068', cursor: 'pointer'  }} src={src} />
  )
);


export default CourseAvatar;