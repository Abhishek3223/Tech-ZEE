import React from 'react'
import './hero.css'
import Herobar1 from './Herobar1'
import MailList from './MailList'
function Hero() {
  return (
    <div>
      
      <main>
        <section className='hero-bar1 '>
          <div className="Hero-bar-text fs-1">
          Crack your goal <br/> Achieve your passion!<br/>
        <div className='desc-herobar'>Unlock your learning potential with TZEE's cutting-edge online teaching platform, <br/>
            designed to deliver the best learning experience tailored just for you!</div>
          <button className='btn bg-primary text-light p-2 getstarted'>GET STARTED FREE</button>
          
          </div>
          
          <div className="hero-bar-image">
            <Herobar1/>
          </div>
        </section>
          {/* <div className='line'></div> */}
        <section className="featureBar">
        <p className='fs-5 pr-5'>Learn it all, in one place! Our multi-learning platform has it all.</p>
        <p className='fs-2 fw-bold'>There’s more than one way to earn</p>
          <div className="featureList">
            <div className="featureItem">
              <div className='featureImage'><img src="feature1.png" alt="" /></div>
              <div className="featuretext">
                <h4>Live Learning</h4>Our website is open to all ages, fostering a community where anyone can teach and learn.  </div>
           </div>
            <div className="featureItem">
              <div className='featureImage'><img src="feature2.png" alt="" /></div>
              <div className="featuretext">
                <h4>Mailing Service</h4>Get personalized mailing services for teachers you have subscribed</div>
           </div>
            <div className="featureItem">
              <div className='featureImage'><img src="feature3.png" alt="" /></div>
              <div className="featuretext">
                <h4>Interactive and Easy</h4>Teach and learn with ease on our attractive and user-friendly website!</div>
           </div>
          
          </div>
          
        </section>
        
      </main>
      
    </div>
 
  )
}

export default Hero
