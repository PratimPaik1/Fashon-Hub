import React from 'react'
import Section3left from './Section3left'
import Section3Right from './Section3Right'

const Section3 = () => {
  return (
    <div className='flex w-full flex-col justify-between p-5 bg-[#060503] text-[#AAAAAA] gap-4  mb:flex-row sm:flex-row'>
        <Section3left/>
        <Section3Right/>
    </div>

  )
}

export default Section3