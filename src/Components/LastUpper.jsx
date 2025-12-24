import React from 'react'
import LastText from './LastText'
import ImageCard from './ImageCard'

const LastUpper = ({cont}) => {

  return (
    <div className=' p-5 flex flex-col gap-5 mb:flex-row sm:flex-row'>
        <ImageCard img={cont[2]}/>
        <div className='w-full flex flex-col gap-5 mb:w-1/2'>
            <LastText content={cont[0]}/>
            <LastText content={cont[1]}/>
        </div>
    </div>
  )
}

export default LastUpper