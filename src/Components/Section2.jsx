import React from 'react'
import Section2Box from './Section2Box'
import Section2Tabs from './Section2Tabs'


const upper=[["INDEPENDENCY","Explore the creativity of independent designers from around the globe."],["UNIQUITY","Discover the charm of unique pieces that stand out effortlessly."],["QUALITY","Experience unparalleled craftsmanship and attention to detail"],["SUSTAINABILITY","Embrate eco-conscious fashion choices without compromising on style"]]
 
const lower=[["DESIGNER","150"],["CLIENTS","500"],["MASTERPIECES","20K"],["EVENTS","50"]]
const Section2 = () => {
  return (
   <div className="bg-[#060503] text-[#AAAAAA]">
     <div className='flex  p-3 gap-3 flex-wrap lg:flex-nowrap mb:flex-nowrap sm:flex-nowrap justify-evenly'>
        {upper.map((item,index)=>{
            return <Section2Box key={index} 
             heading={item[0]}
             text={item[1]} />
        })}
      
    </div>
      <div className='flex w-full justify-around mt-10 pb-10 flex-wrap items-center  gap-10 '>
        {
            lower.map((item,index)=>{
               return <Section2Tabs key={index} heading={item[0]} number={item[1]}/>
            })
        }
      </div>
   </div>
   
  )
  
}

export default Section2