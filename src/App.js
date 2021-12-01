import './App.css';
import Back from './Back';
import Footer from './Footer.js';
import FullPage from './FullPage.js';
import resume from './resumedoc.pdf';
import axios from 'axios';
import github from './github.png'
import linkedin from './linkedin.png'

import {useEffect, React} from 'react';


import stackoverflow from './stackoverflow.png'
function App() {

  

  const getData = async () => {
    try {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data)
      mongo(res.data)
    } catch(e) {
      console.log(e)
    }
  
  }

  const mongo = async (x) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(x)
      };
      try {
        fetch('https://new-api-name.herokuapp.com/register/', requestOptions).then((response) => console.log(response))
      } catch(e) {
          console.log(e)
      }
      }

      useEffect(() => {
        getData();
      }, []);



  return (
    <div className="App">
      <div className='top-list' style={{zIndex: 5}}>
      <div className="social-media">
        <a id="up" href="https://github.com/hellochemo"><img id='github' src={github} /></a>
        <a id="up" href="https://stackoverflow.com/users/11640117/swapnil-sharma"><img id='github' src={stackoverflow} /></a>
        <a id="up" href="https://www.linkedin.com/in/swapnil5harma/"><img id='github' src={linkedin} /></a>
        
      </div>
          <ul className='main-list'>
              <li className='main-title'><a href='#home'>Porte-Feuille</a></li>
              <div className='main-float-right'>
                  <li><a href='#about' className='main-list-underline' >About</a></li>
                  <li><a href='#projects' className='main-list-underline'>Projects</a></li>
                  {/* <li><a href='#skills' id='mobile-hide' className='main-list-underline'>Skills</a></li> */}
                  <li><a href='#contact' id='mobile-hide' className='main-list-underline'>Contact</a></li>
                  <li><a href='#under-water-dive' id='mobile-hide' className='main-list-underline'>Take a under water dive</a></li>
                  <li><a href={resume} download="swapnil-resume.pdf">Download Résumé
            </a></li>
              </div>
          </ul>
      </div>
      <h2 className='verticle'></h2>
      <FullPage />
      <br/>
      <br/>
      <Footer />
      <Back />
    </div>
  );
}

export default App;
