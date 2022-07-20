import React,{useEffect} from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import {$} from "react-jquery-plugin"
function Home() {
   
    
  return (
    <><Nav/>
    <main className="site-main page-spacing">
          
          {/* <!-- Photo Slider --> */}
          <div className="photo-slider container-fluid no-padding">
              {/* <!-- Main Carousel --> */}
              <div id="main-carousel" className="carousel slide carousel-fade col-offset-2" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                      <div className="item active">
                          <div className="slider-image">
                              <img src="assets/images/slider/slider-1.jpg" alt="slider-1"/>
                              <div className="carousel-caption">
                                  <div className="container">
                                      <h5>Welcome to fishing</h5>
                                      <h3>We like Fishing It is always a<span>way Of Relaxing</span></h3>
                                      <p>Sometimes you want to go where everybody knows your name and they're always glad you came so join us here each week my friends you're sure to get a smile from seven </p>
                                      <a href="#" title="Learn More" className="btn btn-default">Learn More</a>
                                      <a href="#" title="Contact Us" className="btn btn-default bg">Contact Us</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="item">
                          <div className="slider-image">
                              <img src="assets/images/slider/slider-2.jpg" alt="slider-2"/>
                              <div className="carousel-caption">
                                  <div className="container">
                                      <h5>Welcome to fishing</h5>
                                      <h3>The best way to a fisherman's<span>Heart is through his fly</span></h3>
                                      <p>That's just a little bit more than the law will allow so get a witch's shawl on a broomstick you can crawl on were gonna pay a call on the Addams Family</p>
                                      <a href="#" title="Learn More" className="btn btn-default">Learn More</a>
                                      <a href="#" title="Contact Us" className="btn btn-default bg">Contact Us</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="item">
                          <div className="slider-image">
                              <img src="assets/images/slider/slider-3.jpg" alt="slider-3"/>
                              <div className="carousel-caption">
                                  <div className="container">
                                      <h5>Welcome to fishing</h5>
                                      <h3>Nothing makes a fish bigger than<span>almost being caught</span></h3>
                                      <p>You would see the biggest gift would be from me and the card attached would say thank you for being a friend and if you threw a party  invited everyone you knew</p>
                                      <a href="#" title="Learn More" className="btn btn-default">Learn More</a>
                                      <a href="#" title="Contact Us" className="btn btn-default bg">Contact Us</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <a className="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
                      <i className="fa fa-angle-left"></i>
                      <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#main-carousel" role="button" data-slide="next">
                      <i className="fa fa-angle-right"></i>
                      <span className="sr-only">Next</span>
                  </a>
              </div>
          </div>
          
          {/* <!-- Why Choose Us --> */}
          <div className="intro-section tr-border container-fluid no-padding">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="intro-content">
                              <i><img src="assets/images/intro/choose-1.jpg" alt="choose-1"/></i>
                              <h3>Fishing Equipments</h3>
                              <p>Straightnin' the curves. Flatnin' the hills Someday the mountain might get 'em but the law never Got kind of tired packin unpackin</p>
                              <a href="#">Read More</a>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="intro-content">
                              <i><img src="assets/images/intro/choose-2.jpg" alt="choose-2"/></i>
                              <h3>Fishing competition</h3>
                              <p>Straightnin' the curves. Flatnin' the hills Someday the mountain might get 'em but the law never Got kind of tired packin unpackin</p>
                              <a href="#">Read More</a>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-6">
                          <div className="intro-content">
                              <i><img src="assets/images/intro/choose-3.jpg" alt="choose-3"/></i>
                              <h3>Fishing tools</h3>
                              <p>Straightnin' the curves. Flatnin' the hills Someday the mountain might get 'em but the law never Got kind of tired packin unpackin</p>
                              <a href="#">Read More</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-padding"></div>
          </div>
          
          {/* <!-- Choose Accessories --> */}
          <div id="accessories-section" className="accessories-section container-fluid no-padding">
              <div className="section-padding"></div>
              <div className="accessories-img-box col-md-6">
                  <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="wheels">
                          <div className="accessories-img img1"></div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="lure">
                          <div className="accessories-img img2"></div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="lines">
                          <div className="accessories-img img3"></div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="rods">
                          <div className="accessories-img img4"></div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="bags">
                          <div className="accessories-img img5"></div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="wheels1">
                          <div className="accessories-img img1"></div>
                      </div>
                  </div>			
              </div>
              
              <div className="col-md-7 accessories-tab-box">
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>Choose Your accessories</h3>
                      <p>Shop By Categories</p>
                  </div>
                  
                  <div className="nav nav-tabs" role="tablist">
                      <a href="#wheels" aria-controls="wheels" role="tab" data-toggle="tab" className="active">
                          <i><img src="assets/images/accessories/accessories-ic1.png" alt="Accessories Icon" /></i>
                          <span>Fishing wheels</span>
                      </a>
                      <a href="#lure" aria-controls="lure" role="tab" data-toggle="tab">
                          <i><img src="assets/images/accessories/accessories-ic2.png" alt="Accessories Icon" /></i>
                          <span>Fishing lure</span>
                      </a>
                      <a href="#lines" aria-controls="lines" role="tab" data-toggle="tab">
                          <i><img src="assets/images/accessories/accessories-ic3.png" alt="Accessories Icon" /></i>
                          <span>Fishing lines</span>
                      </a>
                      <a href="#rods" aria-controls="rods" role="tab" data-toggle="tab">
                          <i><img src="assets/images/accessories/accessories-ic4.png" alt="Accessories Icon" /></i>
                          <span>Fishing rods</span>
                      </a>
                      <a href="#bags" aria-controls="bags" role="tab" data-toggle="tab">
                          <i><img src="assets/images/accessories/accessories-ic5.png" alt="Accessories Icon" /></i>
                          <span>Fishing bags</span>
                      </a>
                      <a href="#wheels1" aria-controls="wheels1" role="tab" data-toggle="tab">
                          <i><img src="assets/images/accessories/accessories-ic1.png" alt="Accessories Icon" /></i>
                          <span>Fishing wheels</span>
                      </a>
                  </div>
              </div>
              <div className="section-padding"></div>
          </div>
          
          {/* <!-- WhyChoose Us Section --> */}
          <div id="whychooseus" className="container-fluid no-padding whychoose-section">
              <div className="section-padding"></div>
              {/* <!-- Container --> */}
              <div className="container">			
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>Why Choose us</h3>
                      <p>Explore Our Features</p>
                  </div>
                  <div className="row">
                      <div className="col-md-3 col-sm-6 col-xs-6">
                          <div className="choose-box">
                              <img src="assets/images/whychooseus/whychooseus1.jpg" alt="whychooseus1"/>
                              <a href="#" title="Arrow" className="choose-next"><i className="fa fa-long-arrow-right"></i></a>
                              <div id="choose_shape-1" className="choose-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose-1" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.4"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div id="choose_br_shape-1" className="choose-br-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose_br-1" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.41"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div className="choose-content">
                                  <span><i><img src="assets/images/whychooseus/choose-ic1.png" alt="whychooseus" /></i></span>
                                  <h3>Most Experienced</h3>
                                  <p>Take a step that is new. We've a loveable spa that needs your face threes company too.</p>	
                                  <a href="#" className="read-more">Read More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-6">
                          <div className="choose-box">
                              <img src="assets/images/whychooseus/whychooseus2.jpg" alt="whychooseus1"/>
                              <a href="#" title="Arrow" className="choose-next"><i className="fa fa-long-arrow-right"></i></a>
                              <div id="choose_shape-2" className="choose-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose-2" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.4"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div id="choose_br_shape-2" className="choose-br-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose_br-2" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.41"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div className="choose-content">
                                  <span><i><img src="assets/images/whychooseus/choose-ic2.png" alt="whychooseus" /></i></span>
                                  <h3>Tips &amp; Advice</h3>
                                  <p>Take a step that is new. We've a loveable spa that needs your face threes company too.</p>	
                                  <a href="#" className="read-more">Read More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-6">
                          <div className="choose-box">
                              <img src="assets/images/whychooseus/whychooseus3.jpg" alt="whychooseus1"/>
                              <a href="#" title="Arrow" className="choose-next"><i className="fa fa-long-arrow-right"></i></a>
                              <div id="choose_shape-3" className="choose-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose-3" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.4"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div id="choose_br_shape-3" className="choose-br-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose_br-3" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.41"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div className="choose-content">
                                  <span><i><img src="assets/images/whychooseus/choose-ic3.png" alt="whychooseus" /></i></span>
                                  <h3>Latest Equipments</h3>
                                  <p>Take a step that is new. We've a loveable spa that needs your face threes company too.</p>	
                                  <a href="#" className="read-more">Read More</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-xs-6">
                          <div className="choose-box">
                              <img src="assets/images/whychooseus/whychooseus4.jpg" alt="whychooseus1"/>
                              <a href="#" title="Arrow" className="choose-next"><i className="fa fa-long-arrow-right"></i></a>
                              <div id="choose_shape-4" className="choose-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose-4" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.4"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div id="choose_br_shape-4" className="choose-br-shape">
                                  <svg width="100%" height="100%">
                                      <clipPath id="choose_br-4" clipPathUnits="objectBoundingBox">
                                          <polygon points="0 0, 0 1, 1 1, 1 0.41"></polygon>
                                      </clipPath>
                                  </svg>
                              </div>
                              <div className="choose-content">
                                  <span><i><img src="assets/images/whychooseus/choose-ic4.png" alt="whychooseus" /></i></span>
                                  <h3>Quick Membership</h3>
                                  <p>Take a step that is new. We've a loveable spa that needs your face threes company too.</p>	
                                  <a href="#" className="read-more">Read More</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-padding"></div>
          </div>
          
          {/* <!-- Gear Section --> */}
          <div id="gear-section" className="container-fluid no-padding gear-section">
              <div className="section-padding"></div>
              {/* <!-- Container --> */}
              <div className="container">
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>the fishing gear you need</h3>
                      <p>Wide Variety Of Top Quality Fly Fishing Tackle</p>
                  </div>
                  <div className="gear-carousel">
                      <div className="gear-box">
                          <a href="#" title="">
                              <img src="assets/images/gear/gear1.jpg" alt="Gear" />
                              <span>Fishing Rod</span>
                          </a>
                      </div>
                      <div className="gear-box">
                          <a href="#" title="">
                              <img src="assets/images/gear/gear2.jpg" alt="Gear" />
                              <span>Fishing reel</span>
                          </a>
                      </div>
                      <div className="gear-box">
                          <a href="#" title="">
                              <img src="assets/images/gear/gear3.jpg" alt="Gear" />
                              <span>Fishing lure</span>
                          </a>
                      </div>
                      <div className="gear-box">
                          <a href="#" title="">
                              <img src="assets/images/gear/gear1.jpg" alt="Gear" />
                              <span>Fishing Rod</span>
                          </a>
                      </div>
                  </div>
              </div>
              <div className="white-seprator"></div>
          </div>
          
          {/* <!-- Team Section --> */}
          <div className="container-fluid no-padding team-section">
              <div className="section-padding"></div>
              {/* <!-- Container -->	 */}
              <div className="container">
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>Meet Our Team</h3>
                      <p>Our Great Skilled Workers</p>
                  </div>
                  <div className="row">				
                      <div className="col-md-3 col-sm-3 col-xs-6">
                          <div className="team-box">
                              <img src="assets/images/team/team1.jpg" alt="team1"/>
                              <div className="team-content">
                                  <ul>
                                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#" title="Google-Pluse"><i className="fa fa-google-plus"></i></a></li>
                                  </ul>
                                  <h3>Wills Martin</h3>
                                  <span>Fisher</span>
                              </div>
                              <div className="team-shape"></div>
                          </div>
                      </div>				
                      <div className="col-md-3 col-sm-3 col-xs-6">
                          <div className="team-box">
                              <img src="assets/images/team/team2.jpg" alt="team1"/>
                              <div className="team-content">
                                  <ul>
                                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#" title="Google-Pluse"><i className="fa fa-google-plus"></i></a></li>
                                  </ul>
                                  <h3>John tomnic</h3>
                                  <span>Fisher</span>
                              </div>
                              <div className="team-shape"></div>
                          </div>
                      </div>				
                      <div className="col-md-3 col-sm-3 col-xs-6">
                          <div className="team-box">
                              <img src="assets/images/team/team3.jpg" alt="team1"/>
                              <div className="team-content">
                                  <ul>
                                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#" title="Google-Pluse"><i className="fa fa-google-plus"></i></a></li>
                                  </ul>
                                  <h3>Tony edwards</h3>
                                  <span>Fisher</span>
                              </div>
                              <div className="team-shape"></div>
                          </div>
                      </div>				
                      <div className="col-md-3 col-sm-3 col-xs-6">
                          <div className="team-box">
                              <img src="assets/images/team/team4.jpg" alt="team1"/>
                              <div className="team-content">
                                  <ul>
                                      <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#" title="Google-Pluse"><i className="fa fa-google-plus"></i></a></li>
                                  </ul>
                                  <h3>Mike freeman</h3>
                                  <span>Fisher</span>
                              </div>
                              <div className="team-shape"></div>
                          </div>					
                      </div>
                  </div>
              </div>
              <div className="section-padding"></div>
          </div>
          
          {/* <!-- Product Section --> */}
          <div className="container-fluid no-padding product-section">
              {/* <!-- Container -->	 */}
              <div className="container">
                  <div className="section-padding"></div>
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>Fishing products from our shop</h3>
                      <p>Explore Our Latest Products For Your Fine Fishing</p>
                  </div>
                  <div className="row">
                      {/* <!-- Product Carousel --> */}
                      <div className="product-carousel">
                          <div className="col-md-12">
                              <div className="product-block">
                                  <span className="new" title="New">New</span>
                                  <a href="#" className="product-wish pull-right" title="Add Wish"><i className="fa fa-heart-o"></i></a>
                                  <div className="product-img-box"><img src="assets/images/product/product1.png" alt="product1"/></div>
                                  <div className="product-info">
                                      <h4>Fishing reel</h4>
                                      <span>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </span>
                                      <h4>$89.00</h4>
                                  </div>
                                  <div className="product-hoverinfo">
                                      <span>$89.00</span>
                                      <a href="#" title="Add to cart"> Add to cart </a>
                                      <p><a href="#" title="Add To Wishlist"><i className="fa fa-heart-o"></i>Add To Wishlist</a></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="product-block">
                                  <span className="new" title="New">New</span>
                                  <a href="#" className="product-wish pull-right" title="Add Wish"><i className="fa fa-heart-o"></i></a>
                                  <div className="product-img-box"><img src="assets/images/product/product2.png" alt="product1"/></div>
                                  <div className="product-info">
                                      <h4>Fishing line</h4>
                                      <span>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </span>
                                      <h4>$45.00</h4>
                                  </div>
                                  <div className="product-hoverinfo">
                                      <span>$55.99</span>
                                      <a href="#" title="Add to cart"> Add to cart </a>
                                      <p><a href="#" title="Add To Wishlist"><i className="fa fa-heart-o"></i>Add To Wishlist</a></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="product-block">
                                  <span className="sale" title="New">Sale</span>
                                  <a href="#" className="product-wish pull-right" title="Add Wish"><i className="fa fa-heart-o"></i></a>
                                  <div className="product-img-box"><img src="assets/images/product/product3.png" alt="product1"/></div>
                                  <div className="product-info">
                                      <h4>Fishing reel</h4>
                                      <span>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </span>
                                      <h4>$70.59</h4>
                                  </div>
                                  <div className="product-hoverinfo">
                                      <span>$70.59</span>
                                      <a href="#" title="Add to cart"> Add to cart </a>
                                      <p><a href="#" title="Add To Wishlist"><i className="fa fa-heart-o"></i>Add To Wishlist</a></p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-12">
                              <div className="product-block">
                                  <span className="new" title="New">New</span>
                                  <a href="#" className="product-wish pull-right" title="Add Wish"><i className="fa fa-heart-o"></i></a>
                                  <div className="product-img-box"><img src="assets/images/product/product4.png" alt="product1"/></div>
                                  <div className="product-info">
                                      <h4>Fishing rod</h4>
                                      <span>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                          <i className="fa fa-star"></i>
                                      </span>
                                      <h4>$110.00</h4>
                                  </div>
                                  <div className="product-hoverinfo">
                                      <span>$110.00</span>
                                      <a href="#" title="Add to cart"> Add to cart </a>
                                      <p><a href="#" title="Add To Wishlist"><i className="fa fa-heart-o"></i>Add To Wishlist</a></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <a href="#" title="View All Products">View all products</a>
                  <div className="section-padding"></div>
              </div>
          </div>
          {/* <!-- Testimonial Section --> */}
          <div className="container-fluid no-padding testimonial-section">
              <div className="section-padding"></div>
              {/* <!-- Container -->	 */}
              <div className="container">
                  {/* <!-- Section Header --> */}
                  <div className="section-header">
                      <h3>words from our clients</h3>
                      <p>Feedback From Our Trusted Clients</p>
                  </div>
                  <div className="row">
                      {/* <!-- Product Carousel --> */}
                      <div className="testimonial-carousel">
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial1.jpg" alt="testimonial1"/>							
                                      <p>The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too millionaire and his wife Well the first thing you</p>
                                  </div>
                                  <p>Chris mikaale -<span> Happy Customer</span></p>
                              </div>
                          </div>
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial2.jpg" alt="testimonial1"/>							
                                      <p>Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. A man is born he's a man of means. </p>
                                  </div>
                                  <p>Merlen brando  -<span> Happy Customer</span></p>
                              </div>
                          </div>
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial1.jpg" alt="testimonial1"/>							
                                      <p>The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too millionaire and his wife Well the first thing you</p>
                                  </div>
                                  <p>Chris mikaale -<span> Happy Customer</span></p>
                              </div>
                          </div>
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial2.jpg" alt="testimonial1"/>							
                                      <p>Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. A man is born he's a man of means.</p> 
                                  </div>
                                  <p>Merlen brando  -<span> Happy Customer</span></p>
                              </div>
                          </div>
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial1.jpg" alt="testimonial1"/>							
                                      <p>The ship set ground on the shore of this uncharted desert isle with Gilligan the Skipper too millionaire and his wife Well the first thing you</p>
                                  </div>
                                  <p>Chris mikaale -<span> Happy Customer</span></p>
                              </div>
                          </div>
                          <div className="col-md-12">	
                              <div className="testimonial-block">
                                  <div className="testimonial-content">
                                      <img src="assets/images/testimonial/testimonial2.jpg" alt="testimonial1"/>							
                                      <p>Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. A man is born he's a man of means. </p>
                                  </div>
                                  <p>Merlen brando  -<span> Happy Customer</span></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-padding"></div>
          </div>
          
      </main>
      <Footer/>
      </>
  )
}

export default Home