import React from 'react';
import subtitleLine from '../../assets/images/about/subtitle-line.svg';
import xiomiLogo from '../../assets/images/clients/xiomi.png';
import digitalProductLogo from '../../assets/images/clients/digital-product.png';
import microsoftLogo from '../../assets/images/clients/microsoft.png';
import lenovoLogo from '../../assets/images/clients/lenovo.png';
import pythonLogo from '../../assets/images/clients/python.png';

const ClientsArea = () => {
  return (
    <div className="clients-area">
      <div className="container p_relative">
        <div className="row">
          <div className="col-12">
            <div className="clients-inner">
              <div className="section-title section-title-client">
                <h5 className="section-subtitle"><span>Our Clients</span> <img src={subtitleLine} alt="" /></h5>
                <h3 className="section-heading">Your Successful, <br/> <span>reputation</span></h3>
                <span className="shadow-title">Our clients</span>
                <div className="section-title-para">
                  <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories exceptional customer service, make them the go-to source for all of my automotive needs.</p>
                </div>
                <a href="#" className="vw-btn-primary section-title-btn"><i className="icon-arrow-right"></i> View ALL Services</a>
              </div>
              <div className="clients-list">
                <div className="single-client">
                  <div className="single-client-inner">
                    <div className="single-client-block">
                      <div className="single-client-number">
                        <span>01</span>
                      </div>
                      <div className="single-client-img">
                        <img src={xiomiLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-client">
                  <div className="single-client-inner">
                    <div className="single-client-block">
                      <div className="single-client-number">
                        <span>02</span>
                      </div>
                      <div className="single-client-img">
                        <img src={digitalProductLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-client">
                  <div className="single-client-inner">
                    <div className="single-client-block">
                      <div className="single-client-number">
                        <span>03</span>
                      </div>
                      <div className="single-client-img">
                        <img src={microsoftLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-client">
                  <div className="single-client-inner">
                    <div className="single-client-block">
                      <div className="single-client-number">
                        <span>04</span>
                      </div>
                      <div className="single-client-img">
                        <img src={lenovoLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-client">
                  <div className="single-client-inner">
                    <div className="single-client-block">
                      <div className="single-client-number">
                        <span>05</span>
                      </div>
                      <div className="single-client-img">
                        <img src={pythonLogo} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsArea;