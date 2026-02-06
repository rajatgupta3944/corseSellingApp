import { Flex, Space, Typography } from 'antd'
import React from 'react'
import CourseForm from '../../../components/common/CourseForm'
import CourseInput from '../../../components/common/CourseInput'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import CourseButton from '../../../components/common/CourseButton'
import ReactHookInput from '../../../components/common/ReactHookInput'

const schema = yup.object({
  name: yup.string().required(),
  password: yup.string().required()
})

const Login = () => {
  const {handleSubmit, reset, control} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      password: ""
    }
  })

  const onSubmit = (data: any) => console.log(data)
  return (
    <Flex justify='center' className='form-wrapper'>
      <CourseForm onSubmit={handleSubmit(onSubmit)} className="course-form">
        <Flex justify='center'>
          <Typography.Title level={2}>
            Login Form!!
          </Typography.Title>
        </Flex>
        <Space orientation='vertical' size={16} className='form-fields'>
        <ReactHookInput name="name" type="text" rules={{ required: true }} control={control} placeholder="Enter user name..." />
        <ReactHookInput name="password" type="password" rules={{ required: true }} control={control} placeholder="Enter password..." />
        <CourseButton label="Login" />
        </Space>
      </CourseForm>
    </Flex>
  )
}

export default Login