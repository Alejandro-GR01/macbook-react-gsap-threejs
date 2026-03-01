import { footerLinks } from "../constants"
import { images } from "../utils/paths"


const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>More ways tho shop: Find an Apple Store or other retailer near you. Our call 000800 040 1966</p>
        <img src={images.logo} alt="Apple logo " loading="lazy" />
      </div>
      <hr/>

      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved. </p>

        <ul>
          {footerLinks.map(({label, link})=> (
            <li key={label} >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul> 
      </div>
    </footer>
  )
}

export default Footer