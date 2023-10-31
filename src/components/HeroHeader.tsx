import HeroHeaderButton from './HeroHeaderButton';
import '../css/HeroHeader.css'

export default function HeroHeader() {
  const backdropURL: string = "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
  const logoURL: string = "https://image.tmdb.org/t/p/original/q2AbGZCE0iTA11LI0PkvJgQtER9.png"

  return (
    <div id="hero-header-container">
      <img id="hero-image" src={backdropURL}/>
      <div id="hero-overlay">
        <div id="hero-logo" >
          <img id="hero-logo-image" src={logoURL} draggable="false"/>
        </div>
        <div id="hero-buttons">
          <HeroHeaderButton text="Play Trailer"/>
          <HeroHeaderButton text="Info"/>
        </div>
      </div>
    </div>
  )
}
