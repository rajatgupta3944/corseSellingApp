import { Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, { type ChangeEventHandler, type ComponentProps } from 'react'

interface BaseProps {
  name?: string
  value?: string
  label?: string
  className?: string
  placeholder?: string
}

interface TextInputProps extends BaseProps {
  type?: 'text' | 'password'
  onChange?: ChangeEventHandler<HTMLInputElement>
}

interface TextAreaInputProps extends BaseProps {
  type: 'textArea'
  rows?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

type CourseInputProps = TextInputProps | TextAreaInputProps

const CourseInput = (props: CourseInputProps) => {
  const { label, name, value, className, placeholder } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {props.type === 'textArea' ? <TextArea
          name={name}
          value={value}
          onChange={props.onChange}
          className={className}
          placeholder={placeholder}
          rows={props.rows}
        /> : <Input type={props.type} name={name} value={value} onChange={props.onChange} className={className} placeholder={placeholder} />}
    </div>
  )
}

export default CourseInput