import React from 'react';
import cssDesignAward from '../../assets/images/brands/css-Design-Award.png';
import noCode from '../../assets/images/brands/no-code.png';
import awwwards from '../../assets/images/brands/awwwards.png';
import behance from '../../assets/images/brands/behance.png';

const BrandsArea = () => {
  return (
    <div className="brands-area">
      <div className="xlHeader xlHeader--right">
        <div className="row">
          <div className="col-12">
            <div className="xlHeader__header d-block w-100 text-end">
              <div className="brands-grid">
                <div className="single-brand"><img src={cssDesignAward} alt="CSS Design Award" /></div>
                <div className="single-brand"><img src={noCode} alt="No Code" /></div>
                <div className="single-brand"><img src={awwwards} alt="Awwwards" /></div>
                <div className="single-brand"><img src={behance} alt="Behance" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xlHeader xlHeader--left">
        <div className="row">
          <div className="col-12">
            <div className="xlHeader__header d-block">
              <div className="category-grid">
                <div className="single-category-grid"><span>Websites</span></div>
                <div className="single-category-grid"><span>Visual Identity</span></div>
                <div className="single-category-grid"><span>Development</span></div>
                <div className="single-category-grid"><span>UX/ UI Designer</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsArea;