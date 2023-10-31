import HeroHeaderButton from './HeroHeaderButton';
import '../css/HeroHeader.css'
import { Images } from '../types/api';

export default function HeroHeader({images}: {images: Images}) {
  let backdropURL: string = "https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
  let logoURL: string = "https://image.tmdb.org/t/p/original/q2AbGZCE0iTA11LI0PkvJgQtER9.png"

  const host = "https://image.tmdb.org/t/p/original"

  if (Object.keys(images).length != 0) {
    const noLanguageBackdrops = images.backdrops.filter((image) => image.iso_639_1 == null);
    const englishLogos = images?.logos.filter((image) => image.iso_639_1 == "en");
    
    backdropURL = host + noLanguageBackdrops[0].file_path;
    logoURL = host + englishLogos[0].file_path;
  }

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
