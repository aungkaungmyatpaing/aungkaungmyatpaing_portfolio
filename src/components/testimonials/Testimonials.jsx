import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'MhanSolo',
    review: 'hey, let me just say that my homie is one talented web developer! I have seen some of the websites he developed, and they are seriously impressive for junior. He also have a keen eye for design and user experience.I would highly recommend this web development service to anyone looking to create a top-notch website for their business. '
  },
  {
    avatar: AVTR2,
    name: 'AyeMya Lisa',
    review: "Let me tell you, my bf is one seriously skilled web developer! I had the pleasure of watching my partner work on his website development project."
  },
  {
    avatar: AVTR3,
    name: 'SithuPhyo',
    review: "All I can say is that my friend who is a web developer is one of the hardest working people I know. He put in long hours and are always striving to improve his skills and knowledge in his field.Even though I don't understand the technical aspects of web development, I've seen the results of my friend's hard work."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from other</h5>
      <h2>Testimonails</h2>

      {/* <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper> */}
    </section>
  )
}

export default Testimonials