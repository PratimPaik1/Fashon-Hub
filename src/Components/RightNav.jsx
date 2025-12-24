import React from 'react'
import NavTab from './NavTab'
import RedTab  from './RedTab'



const RightNav = (props) => {
  return (
    <div className=" gap-5 pr-4 hidden sm:flex mb:flex lg:flex">

      {props.tabs.map((tab,idx) => (
        <NavTab key={idx} text={tab} />
      ))}
      <RedTab/>
    </div>
  )
}

export default RightNav
