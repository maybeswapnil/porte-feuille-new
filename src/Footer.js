import github from './github.png'
function Footer() {
  return (
    <div>
    
    <footer className="site-footer" id='contact'>

      <div className="social-media">

        <img src={github} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Description</h6>
            <p className="text-justify">Built with react js and react scroll motion frane work uses express as a backend framework to store form information.</p>

            <li>React</li>
            <li>Express</li>
            <li>React Scroll Motion</li>

            <p className="text-justify">Version 1.0</p>

          </div>

          {/* <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div> */}
    <br />
          {/* <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="">Contact Me</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div> */}
        </div>
    <br />

      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by {' '} 
         <a href="#">Swapnil</a>.
            </p>
          </div>
    <br />

          
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div> */}
        </div>
      </div>
</footer>


    </div>
  );
}

export default Footer;
