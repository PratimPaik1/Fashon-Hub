import React from 'react'
import ImageCard from './ImageCard'
import LastText from './LastText'


const LastLower = ({cont}) => {
  return (
    <div className='flex flex-col gap-5 p-5 mb:flex-row sm:flex-row lg:flex-row' >
       <div className='w-full flex flex-col gap-5'>
         <LastText content={cont[0]}/>
        <LastText content={cont[1]}/>
       </div>
        <ImageCard img={cont[2]}/>
    </div>
  )
}

export default LastLower