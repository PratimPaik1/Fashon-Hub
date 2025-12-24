import React from 'react'
import LastUpper from './LastUpper'
import LastLower from './LastLower'



import card1BG from '../assets/card2img.png'
import card2BG from '../assets/card3img.png'




const card1=[["INDEPENDENT DESIGNERS","Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovation of the artists behind them. Explore curated collections showcasing unique creations by independent designers"],["EXCLUSIVE & UNIQUITY","Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity."],card1BG]

const card2=[["HIGH QUALITY","Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style."],["ECO-FRIENDLY","Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."],card2BG]


// console.log(card1)


const LastSection = () => {
  return (
    <div className='bg-[#060503] text-[#AAAAAA] '>
        <LastUpper cont={card1}/>
        <LastLower cont={card2}/>
    </div>
  )
}

export default LastSection