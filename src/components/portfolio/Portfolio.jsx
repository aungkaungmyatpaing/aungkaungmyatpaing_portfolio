import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import COM from '../../assets/comingsoon.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Laravel Ecommerce Website with User & Admin Panel',
    github: 'https://github.com/aungkaungmyatpaing/summer_ecom',
    demo: 'https://dribbble.com/MagDog'
  },
  {
    id: 2,
    image: IMG2,
    title: 'React Personal Portfolio Website',
    github: 'https://github.com/aungkaungmyatpaing/aungkaungmyatpaing_portfolio',
    demo: 'https://dribbble.com/MagDog'
  },
  {
    id: 3,
    image: IMG3,
    title: 'AmataHotel landing Website with React, Tailwind',
    github: 'https://github.com/aungkaungmyatpaing/amata_restaurant_landing',
    demo: 'https://dribbble.com/MagDog'
  },
  {
    id: 4,
    image: IMG4,
    title: 'WildRift landing Website with React, Tailwind',
    github: 'https://github.com/aungkaungmyatpaing/wildrift_landing',
    demo: 'https://dribbble.com/MagDog'
  },
  {
    id: 5,
    image: COM,
    title: 'On My Way',
    github: 'https://github.com/aungkaungmyatpaing',
    demo: 'https://dribbble.com/MagDog'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </article>
              )
          })
        }
      </div>
    </section >
  )
}

export default Portfolio