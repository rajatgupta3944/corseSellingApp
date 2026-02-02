import React from 'react'

const Input = ({type, name, value, onChange, className, placeholder}: any) => {
  return (
    <div>
      <input type={type} name={name} value={value} onChange={onChange} className={className} placeholder={placeholder}  />
    </div>
  )
}

export default Input