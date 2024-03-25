import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';



function Intro() {
  return (
    <div className='intro'>
        <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            
            <span>Jannat Khatoon</span>
         
           
            <span>Frontend Developer with high level of experience in web designing and development.</span>
        </div>
         
         <button className="button i-button">
            Hire me
         </button>


         <div className="i-icons">
            <a href='https://github.com/001Jannat'>
            <img src={Github} alt=''/>
            </a>
            <a href='https://www.linkedin.com/in/jannat-khatoon-aa1102212/'>

            <img src={LinkedIn} alt=''/>
            </a>
            {/* <img src={Instagram} alt=''/> */}
         </div>
        </div>
        <div className="i-right">
           <img src={Vector1} alt =''/>
           <img src={Vector2} alt =''/>
           {/* <img src={girl} alt =''/> */}
        </div>
    </div>
  )
}

export default Intro