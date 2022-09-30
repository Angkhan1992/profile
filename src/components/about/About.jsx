import React from 'react'
import './About.css'
import 'react-multi-carousel/lib/styles.css';
import avatar from '../../assets/img/angkhan.png'

const About = () => {
  return (
    <section className="about" id='about'>
      <div className='right-a'>
        <img src={avatar} alt="Avatar" />
      </div>
      <div className='left-a'>
        <div>
          <h2><span className="stroke-text">Who </span> AM I?</h2>
        </div>
        <p></p>
        <span>Full Name </span>
        <p>Angkhan Bouasavanh</p>
        <p></p>
        <span>Email Address </span>
        {/* <p>angkhan.buasavanh@gmail.com</p> */}
        <p>angkhan.**********@*****.com</p>
        <p></p>
        <span>Phone Number </span>
        <p>+(856) 209 *** ****</p>
        <p></p>
        <span>Location </span>
        <p>Hadxayfon Vientiane, VT 01120 In Laos</p>
      </div>
    </section>
  )
}

export default About