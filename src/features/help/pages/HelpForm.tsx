import React from 'react'
import CourseForm from '../../../components/common/CourseForm'
import ReactHookInput from '../../../components/common/ReactHookInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { Flex, Space, Typography } from 'antd'
import CourseButton from '../../../components/common/CourseButton'
import { schema } from '../schema'
import type { FormValues } from '../types'

const HelpForm = () => {
  const { handleSubmit, reset, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      details: "",
    },
    // mode: "onChange",
  })
  const onSubmit = (data: FormValues) => console.log(data)
  const handleReset = () => {
    reset()
  }
  return (
    <Flex justify="center" className="form-wrapper">
  <CourseForm onSubmit={handleSubmit(onSubmit)} className="course-form">
    <Flex justify="center">
    <Typography.Title level={2}>Contact Us!!</Typography.Title>
    </Flex>
    <Space orientation="vertical" size={16} className="form-fields">
      <ReactHookInput
        type="text"
        control={control}
        name="name"
        rules={{ required: true }}
        placeholder="Enter your name..."
      />

      <ReactHookInput
        type="email"
        control={control}
        name="email"
        rules={{ required: true }}
        placeholder="Enter your email..."
      />
      <ReactHookInput
        type="textArea"
        control={control}
        name="details"
        rules={{ required: true }}
        rows={4}
        placeholder="Describe your issue..."
      />
      <Flex justify='space-between'>
        <CourseButton
        label="Reset"
        onClick={handleReset}
      />
      <CourseButton
        type="primary"
        htmlType="submit"
        label="Submit"
        className="submit-btn"
      />
      </Flex>
    </Space>
  </CourseForm>
</Flex>
  )
}

export default HelpForm