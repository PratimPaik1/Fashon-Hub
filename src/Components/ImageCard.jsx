import React from 'react'

const ImageCard = ({img}) => {
  return (
    <div className='w-full h-120 bg-cover bg-center rounded-2xl ' 
    style={{ backgroundImage: `url(${img})` }}
    ></div>
  )
}

export default ImageCard