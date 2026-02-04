import React from 'react'
import CourseInput from './CourseInput'

interface SearchBarProps {
  name: string;
  type: any;
  placeholder: string;
  className?: string;
  onChange?: (e: any) => void;
}

const SearchBar = ({className, name, onChange, type, placeholder}: SearchBarProps) => {
  return (
    <CourseInput className={className} name={name} onChange={onChange} type={type} placeholder={placeholder} />
  )
}

export default SearchBar