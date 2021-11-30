import Rellax from "rellax";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";



const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
function FullPage() {
  

var rellax = new Rellax('.rellax');


  return (
    <div className="Full-Page">



     
      <div className='full-description-div'>
        
      <h1 style={{color:'white', marginTop:'0vmin', position:"absolute"}} id='home'>.</h1>

      <div className="title">
          <h1 className='full-description' id=''>
                  The Guy behind this is a creator who builds powerful business solutions
          </h1>
      </div>
      </div>
      

      <h1 style={{color:'white', marginTop:'35vmin', position:"absolute"}} id='about'>.</h1>

      <div className='about-me'>
                        {/* <h2 className='not-me' id='about'>About Me</h2> */}
                        <p className='description'>Creative Fullstack Developer - Designer<br/>Learning German right now.<br /> Strong in design and integration with intuitive problem-solving skills. Proficient in Java. Passionate about implementing and launching new projects. Seeking an opportunity in an esteemed organization with increasing potential for growth and development.</p>
                    </div>

      <h1 style={{color:'white', marginTop:'70vmin', position:"absolute"}} id='projects'>.</h1>
      <h1 style={{color:'white', marginTop:'275vmin', position:"absolute"}} id='contact'>.</h1>
      <h1 style={{color:'white', marginTop:'155vmin', position:"absolute"}} id='skills'>.</h1>
      <h1 style={{color:'white', marginTop:'495vmin', position:"absolute"}} id='under-water-dive'>.</h1>


      <div className='image-lobby'>
        <img className='image-file' id='mobile-hide' src='https://images.pexels.com/photos/7367207/pexels-photo-7367207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        <div>
        <h4 id='para-one'>Projects</h4>
           
            <h4 id='para-one'>Weather Information Extractor (API):</h4>
            <p id='para-one'>Retrieves raw data from an external API, validates and formats the data in the desired client requirement. Used Stripe to manage the transaction and validate the payment information. Payment through stripes creates a token that can be used to access the API by passing it in header. All the generated API tokens were hashed and stored in MongoDB. (Express, MongoDB, Stripe).</p>

            <h4 id='para-one'>Multiplayer Interface (Web Page):</h4>
            <p id='para-one'>
                  It is a simple multiplayer Interface uses React JS as Front End. Used Framer-Motion for animating the page. (React JS/Framer-Motion)
                  Restful API made using Spring Boot and Hibernate ORM for data mapping, provides a safe authentication to the app and is capable of running on multiple sessions. 
                  Deployed on AWS EC2 instance. (Spring: 5.3.6, Java 8, MySQL) </p>
            



            <h4 id='para-one'>Lens 	4.38mm ƒ/1.7 0.000937s ISO 88</h4>
            <h4 id='para-one'>Size 	4.18 MB</h4>
            <h4 id='para-one'>Resolution 	3024px x 4032px</h4>
            <h4 id='para-one'>Camera Pixel 4a</h4>
            <h4 id='para-one'>Software 	Snapseed 2.19.280302127</h4>
            <h4 id='para-one'>Taken at 	March 29, 2021 5:29 pm</h4>    


             



                          
        </div>
        
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <div className='image-lobby-two'>

        <div>
        <h4 id='para-one'>Professional Summary</h4>

        <p id='para-one'>Sigle handedly managed multiple projects. I contributed to automating database failovers that ensure minimal impact on business-critical API transactions. Besides, I volunteered to tap my web development expertise to develop a portfolio dashboard for internal team and an internal platform for generating graphs and performance results.</p>
        <p id='para-one'>The corporate experience helped me better understand the need and skill of translating real-time problems into business challenges that are strongly coupled with technology, as these applications helped decrease the total cost to the project team.</p>

        <h4 id='para-one'>Certifications</h4>
            <p id='para-one'>
                Responsive Web Design (freeCodeCamp)- Worked with React JS, D3JS to implement dynamic UI
                Java Certification (HackerRank) 
                JavaScript Algorithms and Data Structures (freeCodeCamp) 
                Git (Percipio).</p>

                <h4 id='para-one'>Skills</h4>
                            <p id='para-one'>Databases: MySQL, MongoDB
                Other Frameworks: Spring (Boot, REST, MVC, JPA) 
                Hands-on Experience: Git, AWS (EC2, RDS, S3), GitHub, Netlify
                Programming Languages: Java (Intermediate), JavaScript (Intermediate)
                RDMS Development and SQL 
                API Design and Development: Express, Node
                JS Frameworks: React, Framer-Motion (Animation).</p>
            <h4 id='para-one'>Lens 	55.0mm ƒ/5.6 0.002s ISO 400</h4>
            <h4 id='para-one'>Size 	4.18 MB</h4>
            <h4 id='para-one'>Resolution 	3456px x 5184px</h4>
            <h4 id='para-one'>Taken at 	November 29, 2020 10:33 pm</h4>           
        </div>
        <img className='image-file-two' id='mobile-hide' src='https://images.pexels.com/photos/6022539/pexels-photo-6022539.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
        

        
 


      </div>
    </div>
  );
}

export default FullPage;
