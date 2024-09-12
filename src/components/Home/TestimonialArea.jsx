import React from 'react';
import subtitleLine from '../../assets/images/about/subtitle-line.svg';
import testimonial1 from '../../assets/images/testimonial/testimonial-1.png';
import testimonial2 from '../../assets/images/testimonial/testimonial-2.png';
import testimonial3 from '../../assets/images/testimonial/testimonial-3.png';
import testimonial4 from '../../assets/images/testimonial/testimonial-4.png';
import quoteIcon from '../../assets/images/testimonial/quote-icon.svg';


const TestimonialArea = () => {
  return (
    <div className="testimonial-area">
      <div className="container-fluid">
        <div className="row gx-0">
          <div className="col-xl-5 col-lg-6">
            <div className="testimonial-left-section">
              <div className="section-title">
                <h5 className="section-subtitle"><span>UNIQUE EXPERTISE</span> <img src={subtitleLine} alt="" /></h5>
                <h3 className="section-heading">Milestones that <span>we proudly</span></h3> 
                <p>Transforming ideas into user-friendly and visually appealing websites Accounting and Bookkeeping Services related to <a href="#">financial record-keeping.</a></p>
              </div>
              <div className="milestone-section">
                <div className="single-milestone">
                  <div className="single-milestone-counter">
                    <span className="milestone-counter-number">300</span><span className="milestone-counter-symble">+</span>
                  </div>
                  <div className="single-milestone-title">
                    <h4>Project</h4>
                    <p>I have been a loyal customer of this auto parts company for years</p>
                  </div>
                </div>
                <div className="single-milestone">
                  <div className="single-milestone-counter">
                    <span className="milestone-counter-number">55</span><span className="milestone-counter-symble">+</span>
                  </div>
                  <div className="single-milestone-title">
                    <h4>Team Members</h4>
                    <p>I have been a loyal customer of this auto parts company for years </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="testimonial-section">
              <div className="section-title testimonial-right-title">
                <h5 className="section-subtitle"><span>testimonial</span> <img src={subtitleLine} alt="" /></h5>
                <h3 className="section-heading">Feedback From <br/> <span>Our Clients.</span></h3> 
              </div>
              <div className="testimonial-list">
                <ul className="slider-nav">
                  <li>
                    <div className="single-nav">
                      <img src={testimonial1} alt="" />
                    </div>
                  </li>
                  <li className="ml-40" style={{ marginLeft: '50px !important' }}>
                    <div className="single-nav">
                      <img src={testimonial2} alt="" />
                    </div>
                  </li>
                  <li className="ml-40" style={{ marginLeft: '50px !important' }}>
                    <div className="single-nav">
                      <img src={testimonial3} alt="" />
                    </div>
                  </li>
                  <li>
                    <div className="single-nav">
                      <img src={testimonial4} alt="" />
                    </div>
                  </li>
                </ul>
                <div className="slider-for">
                  <div className="single-testimonial">
                    <h4 className="testimonial-title">
                      Code Quality
                    </h4>
                    <img src={subtitleLine} alt=""/>
                    <div className="testimonial-text">
                      <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.</p>
                    </div>
                    <div className="testimonial-bio">
                      <h5 className="testimonial-bio-title">Marvin McKinney</h5>
                      <span className="testimonial-bio-designation">Web designer</span>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <h4 className="testimonial-title">Code Quality</h4>
                    <img src={subtitleLine} alt=""/>
                    <div className="testimonial-text">
                      <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.</p>
                    </div>
                    <div className="testimonial-bio">
                      <h5 className="testimonial-bio-title">Marvin McKinney</h5>
                      <span className="testimonial-bio-designation">Web designer</span>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <h4 className="testimonial-title">Code Quality</h4>
                    <img src={subtitleLine} alt=""/>
                    <div className="testimonial-text">
                      <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.</p>
                    </div>
                    <div className="testimonial-bio">
                      <h5 className="testimonial-bio-title">Marvin McKinney</h5>
                      <span className="testimonial-bio-designation">Web designer</span>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <h4 className="testimonial-title">Code Quality</h4>
                    <img src={subtitleLine} alt=""/>
                    <div className="testimonial-text">
                      <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories, combined with their competitive prices.</p>
                    </div>
                    <div className="testimonial-bio">
                      <h5 className="testimonial-bio-title">Marvin McKinney</h5>
                      <span className="testimonial-bio-designation">Web designer</span>
                    </div>
                  </div>
                </div>
                <div className="testi-quote-icon"><img src={quoteIcon} alt=""/></div>
              </div>
              <div className="testimonial-half-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;