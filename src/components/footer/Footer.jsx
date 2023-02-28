import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
      <footer>
        <a href="#" className='footer__logo'>MaG DoG</a>

        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com/aungkaung.myatpaing.33" target="_blank"><FaFacebookF/></a>
          <a href="https://www.instagram.com/ozo_thelivin_nthin/" target="_blank"><FiInstagram/></a>
          <a href="https://twitter.com" target="_blank"><FaTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; MaG DoG 2023. All rights reserved.</small>
        </div>
      </footer>
    )
}

export default Footer