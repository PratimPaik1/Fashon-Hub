import React from 'react'

const Section2Box = ({heading,text}) => {
  return (
    <div className='bg-[#1E1E1E] h-65 p-5 flex flex-col gap-3.5  rounded-2xl  sm:h-66 mb:h-65  m lg:h-60 '>
        <h1 className='text-xl'>{heading}</h1>
        <p className='w-full'>{text}</p>
        <h1>Learn More</h1>
    </div>
  )
}

export default Section2Box