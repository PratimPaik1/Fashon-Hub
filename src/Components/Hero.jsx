import heroImg from '../assets/hero.webp'
import Scetion1HeroContent from './Scetion1HeroContent'

const Hero = () => {
  return (
    <div
      className={`
        w-full min-h-screen
        bg-cover bg-center
        flex items-center
        px-4 sm:px-8 md:px-16
      `}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <Scetion1HeroContent />
    </div>
  )
}

export default Hero
