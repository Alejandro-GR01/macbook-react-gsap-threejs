import { useEffect } from "react"
import { useRef } from "react"
import { images, videos } from "../utils/paths"


const Hero = () => {

  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;

  }
    , [])


  return (
    <section id='hero'>
      <div className="container-section">

        <div>
          <h1>MacBook Pro</h1>
          <picture>
            <source srcSet={images.titleAvif} type="image/avif" />
            <img src={images.title} alt="MacBook Title" loading="eager" />
          </picture>
        
        </div>

        <video ref={videoRef} src={videos.hero} autoPlay muted playsInline></video>

        <button>Buy</button>


        <p>From $1599 or $133/mo for 12 months</p>
      </div>
    </section>
  )
}

export default Hero