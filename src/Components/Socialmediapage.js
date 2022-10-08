import React from 'react'
import leaf from "../Assets/leaf.png"
import app from "../Assets/app.PNG"
import redbar from "../Assets/redbar.png"
import applestore from "../Assets/applestore.png"
import googleplay from "../Assets/googleplay.png"
import "./socialmediapage.css"
export default function socialmediapage() {
  return (
    <div className='social'>
      <div className='first-half'>
         <div className='divupper'>
              
         </div>
         <div className='divcentre'>
            <div className='redbarr'>
            <img src={redbar} className="redbar-img"></img>
            </div>
            <div className='devcentre-mid'>
  
              <div className='font'> Download apps for</div>
              <div className='font font-margin' >exciting deals</div>
              <div className='downloadl downloadl1'>Lorem Ipsum is simply wonderful</div>
            <div className='downloadl'>  dummy industry text language</div>
            <div className='downloadl'>text of the printing and also text of the art</div>
             <div className='store'>
                <img src={googleplay}></img>
                <img src={applestore}></img>                
             </div>

            </div>
         </div>
      </div>
      <div className='second-half'>
              
           <div className='second-half-mid'>
             
              
           <img src={leaf} className="leaff"></img> 
              <img src={app} className="product"></img>
              
           </div>
      </div>


      


    </div>
  )
}
