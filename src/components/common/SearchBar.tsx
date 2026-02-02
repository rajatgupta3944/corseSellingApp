import { Input } from 'antd'
import React from 'react'

const SearchBar = ({className, name, onChange, type, placeholder}: any) => {
  return (
    <Input className={className} name={name} onChange={onChange} type={type} placeholder={placeholder} />
  )
}

export default SearchBar