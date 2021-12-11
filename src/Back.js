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
import bee from './bee.png';
import Form from "./form";
import zip from './swapnilsCADwork.zip'


import {React, useEffect, setState, useState} from 'react'

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());


function Back() {

    const [x, setX] = useState(2)
    const [y, setY] = useState(3)

    const [x2, setX2] = useState(2)
    const [y2, setY2] = useState(3)

    const [xo, setXo] = useState(2)
    const [yo, setYo] = useState(3)

    const [x2o, setX2o] = useState(2)
    const [y2o, setY2o] = useState(3)
  

var rellax = new Rellax('.rellax');


        // const rand = () => {
        //     setInterval(() =>{
        //         var dx = Math.floor(Math.random() * (1920 - 10 + 1) + 10)
        //         var dy = Math.floor(Math.random() * (1080 - 10 + 1) + 10)

        //         while(dx<x) {
        //             setTimeout(() => {
        //                 setX(x-1)
        //                 x=x-100
        //             }, 1000)
        //         }

        //         while(dx>x) {
        //             setTimeout(() => {
        //                 setX(x++)
        //                 x=x+100
        //             }, 1000)
        //         }

        //         setX2(Math.floor(Math.random() * (1920 - 10 + 1) + 10))
        //         setY2(Math.floor(Math.random() * (1080 - 10 + 1) + 10))
        //     }, 10000)
        // }

        
    //   useEffect(() => {
    //     rand();
    //   }, []);

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
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-4000, -90))}>
                    
                    <img id='main-images' className='' style={{marginTop: '70vmin', marginLeft:'435vmin',width: '55vmin', opacity:'0.4'}} src={plane2} />
                    </Animator>
                </ScrollPage> 

                <ScrollPage page={1} className=''>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-800, -10))}>
                        
                             <h1 id='' className="about-class" style={{fontSize:'11vmin',width:"100vmin", marginTop:"40vmin", marginLeft:"60vmin"}}>About Me</h1>
                    
                    </Animator>
                </ScrollPage> 

                <ScrollPage page={6}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, 0))}>
                        
            
                   
                    <h1 id='' className='' style={{marginTop: '-7vmin', marginLeft:'45vmin',width: '760vmin', zIndex:'', paddingBottom:'9vmin' , fontSize:'9.6vmin'}} >The frame is the skeleton of any vehicle which provide support for all system and sub-systems and makes the vehicle ready to drive. Proper vehicle frame construction is the most important part of the project. For high speed operation and to withstand high load and stress tolerance the material needed to be strong while being less in weight. Besides the engine, a large portion of the vehicle weight is accounted for in the frame.</h1>

                    </Animator>
                </ScrollPage> 
                <ScrollPage page={6} className='mobile-hide'>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 0))}>
                        
                             <h1 id='mobile-hide' style={{fontSize:'6vmin', marginTop:"30vmin", marginLeft:"-50vmin", lineHeight:'40vmin'}}>Designs and Renders</h1>
                    
                    </Animator>
                </ScrollPage> 


                <ScrollPage page={6} className='mobile-hide'>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 0))}>
                        
                        
                        {/* <a href={zip} style={{marginTop:}} download="swapnil-cads.zip" id=""><button class="button-2" role="button">Download</button></a> */}
                        
            
                   
                    <li style={{listStyle:'none',marginTop: '30vmin', marginLeft:'110vmin',width: '85vmin'}}>
                    <a href={zip} style={{}} download="swapnil-cads.zip"><div class="download windows">
                        <i class="fa fa fa-windows fa-3x"></i>
                        <span class="df">Download Files</span>
                        </div></a>
                    </li>
                    
                    
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
                    <span style={{ fontSize: "1.8vmin",marginTop: '20vmin', marginLeft:'4vmin',width: '55vmin'}} >
                        <p id='text-on-phone' style={{ fontSize: "2.8vmin"}}>Want to dive in? if yes scroll down</p>
                    </span>
                    <img id='main-images' style={{marginTop: '0vmin', marginLeft:'105vmin',width: '55vmin'}} src={clound2} />
                    <img id='main-images' style={{marginTop: '10vmin', marginLeft:'55vmin',width: '55vmin'}} src={clound3} />

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={13}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <Form />
                   


                    </Animator>
                </ScrollPage>

                <ScrollPage page={12} id='mobile-hide'>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'-80vmin',width: '55vmin'}} id=''>
                    contact.
                    </span>
                   


                    </Animator>
                </ScrollPage>


                <ScrollPage page={15}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'4vmin',width: '55vmin'}} id=''>
                    Thanks for visiting, Peace
                    </span>
                   


                    </Animator>
                </ScrollPage>


                <ScrollPage page={9}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <span style={{ fontSize: "50px",marginTop: '0px', marginLeft:'4vmin',width: '55vmin'}}>
                       
                    </span>
                   

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

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

                <ScrollPage page={15}>
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

                

            <ScrollPage page={8}>
                    <Animator animation={FadeUp}>
                    <img id='main-images' style={{marginTop: '90vmin', marginLeft:'-50vmin',width: '250%'}} className='mobile-hide' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg' />
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(900, -70))}>
                    <img id='main-images' style={{marginTop: '55vmin', marginLeft:'-50vmin',width: '60vmin'}} className='mobile-hide' src={boat} />
                   
                   
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-900, 0))}>
                                      <img id='main-images' style={{marginTop: '-20vmin', marginLeft:'55vmin',width: '55vmin', zIndex:'-9'}} src={clound3} />
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(100, 0))}>
                    <img id='main-images' style={{marginTop: '90vmin', marginLeft:'-90vmin',width: '340%', zIndex:'-9'}} className='mobile-hide' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg' />
                   
                    
                    </Animator>
                </ScrollPage>

                <ScrollPage page={10}>
                    <Animator animation={FadeUp}>
                   

                    <img id='main-images'  className='phone-image-two-scuba' style={{marginTop: '0vmin', marginLeft:'60vmin',width: '55vmin', zIndex:'-9'}} src={scuba} />
               
                    </Animator>
            </ScrollPage>

                <ScrollPage page={10}>
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

                <ScrollPage page={10}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <br />
                    <br />
                    <br />
                    <div  id='hyper-div' style={{ fontSize: "50px",marginTop: '-30vmin', marginLeft:'-60vmin',width: '55vmin'}}>

                   
                        <a className='para-two-bot-head' herf='https://open.spotify.com/playlist/35579dVKvh2Cue5lyXAJso?si=e0abd8eb8aa24943' style={{ fontSize: "2.8vmin"}} className='mobile-hide' id='hyper'>Music Required</a>
                    

                    </div>

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={10}>
                    <Animator animation={FadeUp}>
                    <p id='para-two' className='para-two-bot' style={{marginTop: '-10vmin', marginLeft:'-60vmin',width: '55vmin', zIndex:'-9'}} >After Dark By Mr. Kitty,
                    My Heart is buried in Vanice By Ricky Mongomery,
                    Poison By 44Phantom,
                    slow down my thoughts By Zechery Knowies</p>

         
                    </Animator>
                </ScrollPage>



                <ScrollPage page={8}>
                    <Animator animation={FadeUp}>
                    {/* <span style={{ fontSize: "40px" }}>I'm FadeUp</span> */}
                    <br />
                    <br />
                    <br />
                    <div  id='hyper-div' style={{ fontSize: "",marginTop: '-30vmin', marginLeft:'-60vmin',width: '55vmin'}}>

                   
                        <a herf='https://open.spotify.com/playlist/35579dVKvh2Cue5lyXAJso?si=e0abd8eb8aa24943' style={{ fontSize: "2.8vmin"}} className='mobile-hide' id='hyper'>Web Dev</a>
                    

                    </div>

                    {/* <img id='main-images' style={{width: '5vmin'}} src={logo} /> */}

                    </Animator>
                </ScrollPage>

                <ScrollPage page={8}>
                    <Animator animation={FadeUp}>
                    <p id='para-two' className='para-two-bot' style={{marginTop: '-10vmin', marginLeft:'-60vmin',width: '55vmin', zIndex:'-9', fontSize: "1.8vmin"}} >As you would have noticed from the above story, that I'm a professional web developer, I have in depth knowledge of React, Express</p>
                    </Animator>
                </ScrollPage>


                <ScrollPage page={15}>
                    <Animator animation={FadeUp}>
                    <div class="ocean">
                        <div class="point point--1"></div>
                        <div class="point point--2"></div>
                        <div class="point point--3"></div>
                        <div class="point point--4"></div>
                        <div class="point point--5"></div>
                        <div class="point point--6"></div>
                        <div class="point point--7"></div>
                        <div class="point point--8"></div>
                        <div class="point point--9"></div>
                        <div class="point point--10"></div>
                        <div class="point point--11"></div>
                        <div class="point point--12"></div>
                        {/* <svg width="1920" height="1080"><line x1={x} y1={y} x2={x2} y2={y2} stroke="black"/></svg> */}
                    </div>
                    </Animator>
                </ScrollPage>

            </ScrollContainer>
      </div>  
  );
}

export default Back;
