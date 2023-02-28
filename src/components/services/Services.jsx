import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
            <div className="service__head">
              <h3>UI/UX</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Create an esay option and best forntend design for users.</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>I don't have too much knowledge with UI/UX</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>But I will've to study and learn for my Web Development Skill.</p>
              </li>
            </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Hello, I'm MaG DoG & a laravel web developer.</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>PHP & Laravel framework is a legendary & updated language</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Setup admin panel , create form, edit and delete</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Route , middleware, authentication and Json API</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Database structure, model relation and migration</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Sending invoice to email and paypal payment transitions</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>clients can givea better idea of what I can do.</p>
              </li>
            </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>

            <ul className='service__list'>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Searching knowledge and source from internet.</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Thinking , searching and reference from ultimate source.</p>
              </li>
              <li>
                <GiCheckMark className='service__list-icon'/>
                <p>Then create the new one for my job or project.</p>
              </li>
            </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services