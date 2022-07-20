import React from 'react'

function Nav() {
  return (
    <><header className="header-main container-fluid no-padding">	
    {/* <!-- Top Header  --> */}
    <div className="top-header container-fluid no-padding">
        {/* <!-- Container --> */}
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-6 social">
                    <ul>
                        <li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#" title="Linked In"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 add-to-cart">
                    <ul>
                        <li><a href="#" title="Add To Cart"><i className="fa fa-shopping-cart"></i><span>1</span></a></li>
                        <li><a href="#" title="My Account"><i className="fa fa-user"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 logo-block">
                    <a href="index.html" title="Logo"><img src="assets/images/logo.png" alt="Logo" /></a>
                </div>
            </div>
        </div>
    </div>
    
    {/* <!-- Menu Block --> */}
    <div className="menu-block container-fluid no-pdding">
        {/* <!-- Container --> */}
        <div className="container">
            {/* <!-- Search Box --> */}
            <div className="search-box">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Here . . . "/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
                    </span>
                </div>
            </div>
            {/* <!-- Navigation --> */}
            <nav className="navbar ow-navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html" title="Logo">Bovile</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="index.html" title="Home">Home</a></li>
                        <li><a href="2-about.html" title="About Us">About Us</a></li>
                        <li><a href="3-services.html" title="Services">Services</a></li>
                        <li className="dropdown">
                            <a href="#" title="Pages" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <i className="ddl-switch fa fa-angle-down"></i>
                            <ul className="dropdown-menu">	
                                <li><a href="4-gallery.html" title="Gallery">Gallery</a></li>
                                <li><a href="6-pricing.html" title="Pricing">Pricing</a></li>
                                <li><a href="7-faq.html" title="Faq">FAQ</a></li>
                                <li><a href="10-404.html" title="404">404</a></li>
                            </ul>
                        </li>
                        <li><a href="#" title="Our Team">Shop</a></li>
                        <li className="dropdown">
                            <a href="8-blog.html" title="Latest News" className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Latest News</a>
                            <i className="ddl-switch fa fa-angle-down"></i>
                            <ul className="dropdown-menu">	
                                <li><a href="8-blog.html" title="Blog">Blog</a></li>
                                <li><a href="9-blog-post.html" title="Single Post">Single</a></li>
                            </ul>
                        </li>							
                        <li><a href="11-contact-us.html" title="Contact Us">Contact Us</a></li>
                    </ul>						
                </div>
            </nav>
        </div>
    </div>
</header></>
  )
}

export default Nav