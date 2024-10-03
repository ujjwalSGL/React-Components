import React from 'react'

export default function Input(props) {
    const {placeholder,type,value, onChange} = props;
  return (
    <div> 
      <input type={type} placeholder={placeholder} value={value}  onChange={(e)=>onChange(e.target.value)} className='mb-10 m-10 p-2 rounded-2xl placeholder-black cursor-pointer border w-72' id="input-id"/>
    </div>
  )
}
