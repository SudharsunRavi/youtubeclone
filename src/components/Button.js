import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-5'>
        <button className='px-3 py-1 my-5 bg-gray-200 rounded-xl font-semibold'>{name}</button>
    </div>
  )
}

export default Button