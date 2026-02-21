import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive"


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
              <source srcSet="/laptop.avif" type="image/avif" />
              <img src="/laptop.png" alt="Laptop" />
             </picture>
          
           
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <picture>
            <source srcSet="/sun.avif" type="image/avif" />
            <img src="/sun.png" alt="Sun" />
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
              <source srcSet="/ai.avif" type="image/avif" />
            <img src="/ai.png" alt="AI" />
            </picture>
            <p>Built for <br />
              <span>Apple Intelligence.</span></p>
          </div>
          <div>
            <picture>
            <source srcSet="/battery.avif" type="image/avif" />
            <img src="/battery.png" alt="Battery" />
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