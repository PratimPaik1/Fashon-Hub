import React from 'react'

const Section2Tabs = ({heading,number}) => {
  return (
    <div>
        <h2>{heading}</h2>
        <h1 className='text-5xl'>{number}+</h1>
    </div>
  )
}

export default Section2Tabs