import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive"
import { images } from "../utils/paths"


const Highlights = () => {
  const isMobile = useMediaQuery({ query: ('max-width:1024px') });

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top top'
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      ease: 'power1.inOut'
    })
  })




  return (
    <section id="highlights">
      <h2>There's never been a better time to uograde. </h2>
      <h3>Here's what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <picture>
              <source srcSet={images.laptop.replace('.png', '.avif')} type="image/avif" />
              <img src={images.laptop} alt="Laptop" loading="lazy" />
             </picture>
           
            
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <picture>
            <source srcSet={images.sun.replace('.png', '.avif')} type="image/avif" />
            <img src={images.sun} alt="Sun" loading="lazy" />
            </picture>
            <p>A stunning  <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <picture>
              <source srcSet={images.ai.replace('.png', '.avif')} type="image/avif" />
            <img src={images.ai} alt="AI" loading="lazy" />
            </picture>
            <p>Built for <br />
              <span>Apple Intelligence.</span></p>
          </div>
          <div>
            <picture>
            <source srcSet={images.battery.replace('.png', '.avif')} type="image/avif" />
            <img src={images.battery} alt="Battery" loading="lazy" />
            </picture>
            <p>Up to <span className="green-gradient">14 more hours</span>
              {" "}baterry life. <br />
              <span className="text-dark-100">{" "}(Up to 24 hours total) </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights