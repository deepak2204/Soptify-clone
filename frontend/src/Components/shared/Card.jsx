import React from 'react'

const Card = ({title, description, imgUrl}) => {
  return (
    <div className='bg-black bg-opacity-40 rounded-lg w-1/5 p-4' >
        <div className='pb-4 pt-2'>
            <img src={imgUrl} alt="" 
            className='w-full rounded-md'/>
        </div>
        <div className='text-white font-semibold py-3'>{title}</div>
        <div className='text-gray-500 text-sm'>{description}</div>
      
    </div>
  )
}

export default Card
