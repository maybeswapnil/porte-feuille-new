import './App.css';
import Back from './Back';
import Footer from './Footer.js';
import FullPage from './FullPage.js';
import resume from './resumedoc.pdf';

function App() {
  return (
    <div className="App">
      <div className='top-list' style={{zIndex: 5}}>
          <ul className='main-list'>
              <li className='main-title'><a href='#home'>Porte-Feuille</a></li>
              <div className='main-float-right'>
                  <li><a href='#about' className='main-list-underline'>About</a></li>
                  <li><a href='#projects' className='main-list-underline'>Projects</a></li>
                  <li><a href='#skills' className='main-list-underline'>Skills</a></li>
                  <li><a href='#contact' className='main-list-underline'>Contact</a></li>
                  <li><a href='#under-water-dive' className='main-list-underline'>Take a under water dive</a></li>
                  <li><a href={resume} download="swapnil-resume.pdf">Download Résumé
            </a></li>
              </div>
          </ul>
      </div>
      <h2 className='verticle'>Scroll  ---------</h2>
      <FullPage />
      <br/>
      <br/>
      <Footer />
      <Back />
    </div>
  );
}

export default App;
