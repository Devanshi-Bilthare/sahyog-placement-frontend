import React from 'react';

const IndustriesSection = () => {
  return (
    <section className="industries-section bg-color-1">
      <div className="pattern-layer" style={{ backgroundImage: "url(/src/assets/images/shape/pattern-7.png)" }}></div>
      <div className="auto-container">
        <div className="tabs-box">
          <div className="row clearfix">
            <div className="col-xl-4 col-lg-12 col-sm-12 btn-column">
              <div className="sec-title light">
                <span className="top-title">Our Expertise Areas</span>
                <h2>Industries We Serve</h2>
              </div>
              <div className="tab-btn-box">
                <ul className="tab-btns tab-buttons clearfix">
                  <li className="tab-btn active-btn" data-tab="#tab-1">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-10.png" alt="Logistics & Services" />
                    </figure>
                    <h3>Logistics & Services</h3>
                  </li>
                  <li className="tab-btn" data-tab="#tab-2">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-11.png" alt="Hospitality" />
                    </figure>
                    <h3>Hospitality</h3>
                  </li>
                  <li className="tab-btn" data-tab="#tab-3">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-12.png" alt="Manufacturing" />
                    </figure>
                    <h3>Manufacturing</h3>
                  </li>
                  <li className="tab-btn" data-tab="#tab-4">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-13.png" alt="Education & Government" />
                    </figure>
                    <h3>Education & Government</h3>
                  </li>
                  <li className="tab-btn" data-tab="#tab-5">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-14.png" alt="Software/IT" />
                    </figure>
                    <h3>Software/IT</h3>
                  </li>
                  <li className="tab-btn" data-tab="#tab-6">
                    <figure className="icon-box">
                      <img src="/src/assets/images/icons/icon-15.png" alt="Front Line Support" />
                    </figure>
                    <h3>Front Line Support</h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 col-sm-12 content-column">
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-1">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-1.jpg" alt="Logistics & Services" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Logistics & Services</h2>
                        <span>Explore Opportunities Across 10 Leading Companies</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="logistics-services.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-2">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-2.jpg" alt="Hospitality" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Hospitality</h2>
                        <span>Find Roles in Top Hospitality Chains</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="hospitality.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-3">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-3.jpg" alt="Manufacturing" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Manufacturing</h2>
                        <span>Connect with Leading Manufacturers</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="manufacturing.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-4">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-4.jpg" alt="Education & Government" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Education & Government</h2>
                        <span>Career Opportunities in Public and Educational Sectors</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="education-government.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-5">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-5.jpg" alt="Software/IT" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Software/IT</h2>
                        <span>Opportunities with Leading Tech Firms</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="software-it.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-6">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/src/assets/images/resource/industries-6.jpg" alt="Front Line Support" />
                    </figure>
                    <div className="content-box">
                      <div className="text">
                        <h2>Front Line Support</h2>
                        <span>Explore Opportunities in Customer and Technical Support</span>
                      </div>
                      <div className="line"></div>
                      <div className="link">
                        <a href="front-line-support.html">
                          <i className="flaticon-right-arrow-angle"></i> Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
