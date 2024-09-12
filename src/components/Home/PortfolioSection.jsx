import React from 'react'

import subtitleLine from '../../assets/images/about/subtitle-line.svg';
import portfolioImage1 from '../../assets/images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../../assets/images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../../assets/images/portfolio/portfolio-3.jpg';
import portfolioLine from '../../assets/images/portfolio/line.svg';

function PortfolioSection() {
  return (
    <div>
      <div className="portfolio-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title blog-section-title">
              <h5 className="section-subtitle">
                <span>OUR WORKS</span>
                <img src={subtitleLine} alt="Subtitle Line" />
              </h5>
              <h3 className="section-heading">
                Our latest, <br /> <span>AWESOME DESIGNS</span>
              </h3>
              <span className="shadow-title">Portfolio</span>
            </div>
            <div className="portfolio-cards">
              <div className="portfolio-card-wide">
                <div className="portfolio-card-thumb">
                  <a href="#"><img className="imageParallax2" src={portfolioImage1} alt="Portfolio 1" /></a>
                  <span className="portfolio-number">01</span>
                </div>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-category">
                    <ul className="list-none list-inline">
                      <li><a href="#">Brand, </a></li>
                      <li><a href="#">Photography</a></li>
                    </ul>
                  </div>
                  <h3 className="portfolio-card-wide-title">
                    <a href="#">CLASSIC CONCRETE <span>PLANTERS</span></a>
                  </h3>
                  <img className="portfolio-card-line" src={portfolioLine} alt="Portfolio Line" />
                  <div className="portfolio-card-text">
                    <p>
                      I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.
                      Their extensive selection of high-quality parts and accessories.
                    </p>
                  </div>
                  <a href="#" className="vw-btn-primary"><i className="icon-arrow-right"></i> Read More</a>
                </div>
              </div>
              <div className="portfolio-card-wide style-2">
                <div className="portfolio-card-content">
                  <div className="portfolio-card-category">
                    <ul className="list-none list-inline">
                      <li><a href="#">Brand, </a></li>
                      <li><a href="#">Photography</a></li>
                    </ul>
                  </div>
                  <h3 className="portfolio-card-wide-title">
                    <a href="#">CLASSIC CONCRETE <span>PLANTERS</span></a>
                  </h3>
                  <img className="portfolio-card-line" src={portfolioLine} alt="Portfolio Line" />
                  <div className="portfolio-card-text">
                    <p>
                      I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.
                      Their extensive selection of high-quality parts and accessories.
                    </p>
                  </div>
                  <a href="#" className="vw-btn-primary"><i className="icon-arrow-right"></i> Read More</a>
                </div>
                <div className="portfolio-card-thumb">
                  <a href="#"><img className="imageParallax3" src={portfolioImage2} alt="Portfolio 2" /></a>
                  <span className="portfolio-number">02</span>
                </div>
              </div>
              <div className="portfolio-card-wide">
                <div className="portfolio-card-thumb">
                  <a href="#"><img className="imageParallax2" src={portfolioImage3} alt="Portfolio 3" /></a>
                  <span className="portfolio-number">03</span>
                </div>
                <div className="portfolio-card-content">
                  <div className="portfolio-card-category">
                    <ul className="list-none list-inline">
                      <li><a href="#">Brand, </a></li>
                      <li><a href="#">Photography</a></li>
                    </ul>
                  </div>
                  <h3 className="portfolio-card-wide-title">
                    <a href="#">CLASSIC CONCRETE <span>PLANTERS</span></a>
                  </h3>
                  <img className="portfolio-card-line" src={portfolioLine} alt="Portfolio Line" />
                  <div className="portfolio-card-text">
                    <p>
                      I have been a loyal customer of this auto parts company for years and I cannot recommend them enough.
                      Their extensive selection of high-quality parts and accessories.
                    </p>
                  </div>
                  <a href="#" className="vw-btn-primary"><i className="icon-arrow-right"></i> Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PortfolioSection
