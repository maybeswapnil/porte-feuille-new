import Rellax from "rellax";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import clound1 from './cloud.png';
import clound2 from './cloud2.png';
import clound3 from './cloud3.png';
import plane from './plane.png';
import boat from './boat.png';
import scuba from './scuba.png';
import mount from './mount.png';
import plane2 from './plane2.png';
import street from './street.png';
import Form from "./form";
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
function Back() {
  

var rellax = new Rellax('.rellax');


  return (
      <div>
            <ScrollContainer style={{height: '100%'}}>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-900, 0))}>
                    {/* <span style={{ fontSize: "30px" }}>Let't me show you scroll animation</span> */}
                    <img id='main-images' style={{marginTop: '150vmin', marginLeft:'-90vmin'}}  className='phone-image' src='https://images.pexels.com/photos/9832870/pexels-photo-9832870.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                    </Animator>
                </ScrollPage>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, 900))}>
                    {/* <span style={{ fontSize: "30px" }}>Let't me show you scroll animation</span> */}
                    <img id='main-images' style={{marginTop: '50vmin', marginLeft:'130vmin'}} className='phone-image-two' src='https://images.pexels.com/photos/9698084/pexels-photo-9698084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    </Animator>
                </ScrollPage>
               
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(800, 0))}>
                    
                    <img id='main-images' style={{marginTop: '-200vmin', marginLeft:'145vmin',width: '55vmin'}}  id='phone-image' src={clound1} />
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1} className='mobile-hide'>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-6100, -90))}>
                    
                    <img id='main-images' className='mobile-hide' style={{marginTop: '70vmin', marginLeft:'435vmin',width: '55vmin', opacity:'0.4'}} src={plane2} />
                    </Animator>
                </ScrollPage> 

                <ScrollPage page={1} className='mobile-hide'>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, -10))}>
                        
                             <h1 id='mobile-hide' className="about-class" style={{fontSize:'9vmin', marginTop:"-20vmin", marginLeft:"10vmin"}}>About</h1>
                    
                    </Animator>
                </ScrollPage> 

               

                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(1100, 0))}>
                    
                    <img id='main-images' style={{marginTop: '10vmin', marginLeft:'-100vmin',width: '55vmin'}} src={clound2} />
                    </Animator>
                </ScrollPage> 

                <ScrollPage page={4}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(100, 0))}>
                    
                    <img id='main-images' style={{zIndex:'-9',marginTop: '60vmin', marginLeft:'-88vmin',width: '280vmin'}} src={mount} className='phone-mountain' />
                    </Animator>
                </ScrollPage> 
                
                
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <img id='main-images' style={{marginTop: '0vmin', marginLeft:'105vmin',width: '55vmin'}} src={clound2} />
                    <img id='main-images' style={{marginTop: '-0vmin', marginLeft:'145vmin',width: '55vmin'}} src={clound1} />
                    <img id='main-images' style={{marginTop: '-10vmin', marginLeft:'5vmin',width: '55vmin'}} src={clound3} />


                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>
              

                <ScrollPage page={5}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'4vmin',width: '55vmin'}} >
                        <p id='text-on-phone'>Want to dive in? if yes scroll down</p>
                    </span>
                    <img id='main-images' style={{marginTop: '0vmin', marginLeft:'105vmin',width: '55vmin'}} src={clound2} />
                    <img id='main-images' style={{marginTop: '10vmin', marginLeft:'55vmin',width: '55vmin'}} src={clound3} />

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={10}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <Form />
                   


                    </Animator>
                </ScrollPage>


                <ScrollPage page={12}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'4vmin',width: '55vmin'}} id=''>
                    there is no end, this story will be updated
                    </span>
                   


                    </Animator>
                </ScrollPage>


                <ScrollPage page={8}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'4vmin',width: '55vmin'}}>
                       
                    </span>
                   

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                    <Animator animation={FadeUp}>
                    <div class="ocean">
                        <div class="bubble bubble--1"></div>
                        <div class="bubble bubble--2"></div>
                        <div class="bubble bubble--3"></div>
                        <div class="bubble bubble--4"></div>
                        <div class="bubble bubble--5"></div>
                        <div class="bubble bubble--6"></div>
                        <div class="bubble bubble--7"></div>
                        <div class="bubble bubble--8"></div>
                        <div class="bubble bubble--9"></div>
                        <div class="bubble bubble--10"></div>
                        <div class="bubble bubble--11"></div>
                        <div class="bubble bubble--12"></div>
</div>

                    </Animator>
                </ScrollPage>

                <ScrollPage page={12}>
                    <Animator animation={FadeUp}>
                    <div class="ocean">
                        <div class="bubble bubble--1"></div>
                        <div class="bubble bubble--2"></div>
                        <div class="bubble bubble--3"></div>
                        <div class="bubble bubble--4"></div>
                        <div class="bubble bubble--5"></div>
                        <div class="bubble bubble--6"></div>
                        <div class="bubble bubble--7"></div>
                        <div class="bubble bubble--8"></div>
                        <div class="bubble bubble--9"></div>
                        <div class="bubble bubble--10"></div>
                        <div class="bubble bubble--11"></div>
                        <div class="bubble bubble--12"></div>
</div>

                    </Animator>
                </ScrollPage>

                

            <ScrollPage page={7}>
                    <Animator animation={FadeUp}>
                    <img id='main-images' style={{marginTop: '90vmin', marginLeft:'-50vmin',width: '250%'}} className='mobile-hide' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg' />
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={7}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(900, -70))}>
                    <img id='main-images' style={{marginTop: '55vmin', marginLeft:'-50vmin',width: '60vmin'}} className='mobile-hide' src={boat} />
                   
                   
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={7}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-900, 0))}>
                                      <img id='main-images' style={{marginTop: '-20vmin', marginLeft:'55vmin',width: '55vmin', zIndex:'-9'}} src={clound3} />
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={7}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(100, 0))}>
                    <img id='main-images' style={{marginTop: '90vmin', marginLeft:'-90vmin',width: '340%', zIndex:'-9'}} className='mobile-hide' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg' />
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={FadeUp}>
                   

                    <img id='main-images'  className='phone-image-two-scuba' style={{marginTop: '0vmin', marginLeft:'60vmin',width: '55vmin', zIndex:'-9'}} src={scuba} />
               
                    </Animator>
            </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={FadeUp}>
                   
                    <div class="ocean">
                        <div class="bubble bubble--1"></div>
                        <div class="bubble bubble--2"></div>
                        <div class="bubble bubble--3"></div>
                        <div class="bubble bubble--4"></div>
                        <div class="bubble bubble--5"></div>
                        <div class="bubble bubble--6"></div>
                        <div class="bubble bubble--7"></div>
                        <div class="bubble bubble--8"></div>
                        <div class="bubble bubble--9"></div>
                        <div class="bubble bubble--10"></div>
                        <div class="bubble bubble--11"></div>
                        <div class="bubble bubble--12"></div>
</div>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <br />
                    <br />
                    <br />
                    <div  id='hyper-div' style={{ fontSize: "50px",marginTop: '-30vmin', marginLeft:'-60vmin',width: '55vmin'}}>

                   
                        <a className='para-two-bot-head' herf='https://open.spotify.com/playlist/35579dVKvh2Cue5lyXAJso?si=e0abd8eb8aa24943' className='mobile-hide' id='hyper'>Music Required</a>
                    

                    </div>

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={9}>
                    <Animator animation={FadeUp}>
                    <p id='para-two' className='para-two-bot' style={{marginTop: '-10vmin', marginLeft:'-60vmin',width: '55vmin', zIndex:'-9'}} >After Dark By Mr. Kitty,
                    My Heart is buried in Vanice By Ricky Mongomery,
                    Poison By 44Phantom,
                    slow down my thoughts By Zechery Knowies</p>

         
                    </Animator>
                </ScrollPage>



                <ScrollPage page={7}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <br />
                    <br />
                    <br />
                    <div  id='hyper-div' style={{ fontSize: "50px",marginTop: '-30vmin', marginLeft:'-60vmin',width: '55vmin'}}>

                   
                        <a herf='https://open.spotify.com/playlist/35579dVKvh2Cue5lyXAJso?si=e0abd8eb8aa24943' className='mobile-hide' id='hyper'>Web Dev</a>
                    

                    </div>

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={7}>
                    <Animator animation={FadeUp}>
                    <p id='para-two' className='para-two-bot' style={{marginTop: '-10vmin', marginLeft:'-60vmin',width: '55vmin', zIndex:'-9'}} >As you would have noticed from the above story, that I'm a professional web developer, I have in depth knowledge of React, Express</p>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
      </div>  
  );
}

export default Back;
