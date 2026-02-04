import React, { type ComponentProps } from 'react'
import {Button} from 'antd';

interface CourseButtonProps extends ComponentProps <typeof Button> {
  label?: string;
}

const CourseButton = ({label, type, color, variant, shape, icon, className, ...rest}: CourseButtonProps) => {
  return (
    <Button type={type} color={color} variant={variant} shape={shape} icon={icon} {...rest}>{label}</Button>
  )
}

export default CourseButton