import React from 'react';
import subtitleLine from '../../assets/images/about/subtitle-line.svg';
import blogThumb1 from '../../assets/images/blog/blog-thumb-1.jpg';

const BlogArea = () => {
  return (
    <div className="blog-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="section-title blog-section-title">
              <h5 className="section-subtitle"><span>Latest News</span> <img src={subtitleLine} alt="" /></h5>
              <h3 className="section-heading">LATEST AND, <br/> <span>GREATEST POSTs</span></h3>
              <span className="shadow-title">Latest News</span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="blog-section-top-right">
              <a href="#" className="vw-btn-primary"><i className="icon-arrow-right"></i> View All News</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-card" style={{ backgroundImage: `url(${blogThumb1})` }}>
              <div className="blog-card-inner">
                <span className="blog-card-date">January - 06th 2024</span>
                <h3 className="blog-card-title"><a href="blog-single.html">Will you be attending Affiliate Summit Europe?</a></h3>
                <div className="blog-card-paragraph">
                  <p>I have been a loyal customer of this auto parts company for years and I cannot recommend .</p>
                </div>
                <a href="#" className="blog-card-readmore">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card" style={{ backgroundImage: `url(${blogThumb1})` }}>
              <div className="blog-card-inner">
                <span className="blog-card-date">January - 06th 2024</span>
                <h3 className="blog-card-title"><a href="blog-single.html">Will you be attending Affiliate Summit Europe?</a></h3>
                <div className="blog-card-paragraph">
                  <p>I have been a loyal customer of this auto parts company for years and I cannot recommend .</p>
                </div>
                <a href="#" className="blog-card-readmore">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-card" style={{ backgroundImage: `url(${blogThumb1})` }}>
              <div className="blog-card-inner">
                <span className="blog-card-date">January - 06th 2024</span>
                <h3 className="blog-card-title"><a href="blog-single.html">Will you be attending Affiliate Summit Europe?</a></h3>
                <div className="blog-card-paragraph">
                  <p>I have been a loyal customer of this auto parts company for years and I cannot recommend .</p>
                </div>
                <a href="#" className="blog-card-readmore">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;