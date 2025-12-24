import React from 'react'

const HamBurgeMenu = (props) => {
  // console.log(props.opacity)
  return (
    <div className='p-3  w-40 h-70 bg-[#00000099] absolute top-[110%] right-5 text-[white] flex flex-col gap-5 rounded items-center justify-between  transition-opacity
    duration-300
    ease-in-out'
    style={{ opacity: props.opacity }}
    >
      {props.tabs.map(function(elem,idx){
        return <h1 key={idx}>{elem}</h1>
      })}
    </div>
  )
}

export default HamBurgeMenu