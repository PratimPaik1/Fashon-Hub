import React from 'react'

const LastText = ({content}) => {
  // console.log(content)
  return (
    <div className='bg-[#1E1E1E] p-5 h-1/2 rounded-2xl'>
      <h2>{content[0]}</h2>
      <p>{content[1]}</p>
    </div>
  )
}

export default LastText