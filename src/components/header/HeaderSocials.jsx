import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aung-kaung-myat-paing-486748267/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/aungkaungmyatpaing" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/MagDog" target="_blank"><FiDribbble/></a>
    </div>
    )
}

export default HeaderSocials