// components/Hero.js
import React from 'react';
import './Hero.css';
import image from '../../Assets/F2vrsjdWkAAYPSX.jpg_large'
import heart from '../../Assets/heart.svg'
import eye from '../../Assets/eye.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className='secondParaBg'>Over 3 million ready-to-work creatives!</p>
        <h1>The world’s destination for design</h1>
        <p className='paraBg'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
        <button className="cta-btn">Get Started</button>
      </div>


      <div className='HeroSection2'>
        <div className='Heroing'>
          <p>Explore inspiring designs</p>
        </div>


        <div className='designGrid'>
          <div className='Designs'>
            <img src={image} alt='' />
            <div className='flexingthings'>
              <p>Delvis Black</p>
              <p className='probackground'>PRO</p>
              <div className='wordflexdiv'>
                <p className='wordflex'><img src={heart} alt='' /> 66</p>
                <p><img src={eye} alt='' /> 6.3k</p>
              </div>
            </div>
          </div>


          <div className='Designs'>
            <img src={image} alt='' />
            <div className='flexingthings'>
              <p>Delvis Black</p>
              <p className='probackground'>PRO</p>
              <div className='wordflexdiv'>
                <p className='wordflex'><img src={heart} alt='' /> 66</p>
                <p><img src={eye} alt='' /> 6.3k</p>
              </div>
            </div>
          </div>


          <div className='Designs'>
            <img src={image} alt='' />
            <div className='flexingthings'>
              <p>Delvis Black</p>
              <p className='probackground'>PRO</p>
              <div className='wordflexdiv'>
                <p className='wordflex'><img src={heart} alt='' /> 66</p>
                <p><img src={eye} alt='' /> 6.3k</p>
              </div>
            </div>
          </div>


          <div className='Designs'>
            <img src={image} alt='' />
            <div className='flexingthings'>
              <p>Delvis Black</p>
              <p className='probackground'>PRO</p>
              <div className='wordflexdiv'>
                <p className='wordflex'><img src={heart} alt='' /> 66</p>
                <p><img src={eye} alt='' /> 6.3k</p>
              </div>
            </div>
          </div>


          <div className='Designs'>
            <img src={image} alt='' />
            <div className='flexingthings'>
              <p>Delvis Black</p>
              <p className='probackground'>PRO</p>
              <div className='wordflexdiv'>
                <p className='wordflex'><img src={heart} alt='' /> 66</p>
                <p><img src={eye} alt='' /> 6.3k</p>
              </div>
            </div>
          </div>

          
        </div>
        <button className='btnDesgn'>Browse More Inspiration</button>
      </div>

      <div className="hero-content3">
        <p className='secondParaBg3'>Over 3 million ready-to-work creatives!</p>
        <h1>Find Your Next Designer Today</h1>
        <p className='paraBg3'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
        <button className="cta-btn3">Get started now</button>
        <button className="cta-btn3">Learn about hiring</button>
      </div>


    </section>

  );
};

export default Hero;
