import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const nameList=['All','Music','Gaming','Tech','Movie','Sport','News','Live','Fashion','Learning','360° Video','4K Video']

  return (
    <div className='flex'>
      {nameList.map((name)=>(
        <Button key={name} name={name}/>
      ))}
    </div>
  )
}

export default ButtonList