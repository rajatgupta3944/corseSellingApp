import { Flex, Space, Typography } from 'antd'
import React from 'react'
import CourseForm from '../../../components/common/CourseForm'
import ReactHookInput from '../../../components/common/ReactHookInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { Signup } from '../types'
import { schema } from '../schema'
import CourseButton from '../../../components/common/CourseButton'

const Signup = () => {
  const {handleSubmit, reset, control} = useForm<Signup>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      dob: "",
      email: "",
      password: "",
      phone: ""
    }
  })
  const onSubmit = (data: Signup) => console.log(data);
  const handleReset = () => {
    reset()
  }
  return (
    <Flex justify='center' className='form-wrapper'>
      <CourseForm onSubmit={handleSubmit(onSubmit)} className="course-form">
        <Flex justify='center'>
          <Typography.Title level={2}>Signup Form!!</Typography.Title>
        </Flex>
        <Space orientation='vertical' size={16} className='form-fields'>
          <ReactHookInput name="name" type="text" rules={{ required: true }} control={control} placeholder='Enter your name...' />
          <ReactHookInput name="email" type="email" rules={{ required: true }} control={control} placeholder='Enter your email...' />
          <ReactHookInput name="dob" type="text" rules={{required: true}} control={control} placeholder='Enter your dob...' />
          <ReactHookInput name="phone" type="text" rules={{required: true}} control={control} placeholder="Enter your phone number..." />
          <ReactHookInput name="password" type="password" rules={{required: true}} control={control} placeholder="Enter your password..." />
          <Flex justify='space-between'>
            <CourseButton label='Reset' onClick={handleReset} />
            <CourseButton type='primary' label="Submit" className="submit-btn" />
          </Flex>
        </Space>
      </CourseForm>
    </Flex>
  )
}

export default Signup