import React from 'react'
import subtitleLine from '../../assets/images/about/subtitle-line.svg';
import serviceImage01 from '../../assets/images/service/service01.jpg';
import serviceImage02 from '../../assets/images/service/service02.jpg';
import serviceImage03 from '../../assets/images/service/service03.jpg';
import treesImage from '../../assets/images/service/trees.png';
import teamImage from '../../assets/images/service/team.png';

function ServiceSection() {
  return (
    <div>
         <div className="service-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-titles service-section-title">
              <h5 className="about-subtitle">
                <span>Services</span> 
                <img src={subtitleLine} alt="Subtitle Line" />
              </h5>
              <h3 className="about-title">
                Let’s Check <span>Our <br/> Services</span>
              </h3>
              <span className="shadow-title">Services</span>
            </div>
            <div className="service-list">
              <ul>
                <li>
                  <a href="#">
                    <span>01.</span>Development
                  </a>
                  <div className="services-reel-image">
                    <img src={serviceImage01} alt="Development Service" />
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span>02.</span>Marketing strategy
                  </a>
                  <div className="services-reel-image">
                    <img src={serviceImage02} alt="Marketing Strategy Service" />
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span>03.</span>UI Design
                  </a>
                  <div className="services-reel-image">
                    <img src={serviceImage03} alt="UI Design Service" />
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span>04.</span>Data & Analytics
                  </a>
                  <div className="services-reel-image">
                    <img src={serviceImage01} alt="Data & Analytics Service" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="service-encourage-title">
              <h2>
                It's Time To Take 
                <span className="service-stroke-text">Your Creative Design</span>
                <img src={treesImage} alt="Trees" />
                To The Next Level
                <img src={teamImage} alt="Team" />
                We Are <span className="thin-text">Always Here</span> 
                To Help You Grow 
                <span className="thin-text">Your Business</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="counter-section home__one">
              <div className="single-counterup">
                <span className="counterup-number">5k+</span>
                <small className="counterup-title">Awesome Clients</small>
              </div>
              <div className="single-counterup">
                <span className="counterup-number">3b+</span>
                <small className="counterup-title">Earnings Year</small>
              </div>
              <div className="single-counterup">
                <span className="counterup-number">500k+</span>
                <small className="counterup-title">Created Projects</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServiceSection
