import React from 'react'
import "./Services.css"
import redbar from "../Assets/redbar.png"
import meeting from "../Assets/meeting.png"
import path from "../Assets/Path.png"
import plate from "../Assets/plate.PNG"
export default function Services() {
  return (
    <div className="services">
   
    
      <div className='top-bar'>
      <div className='mid-top-bar'>
      <img src={redbar} className="redbar"></img>
             <div className='textt'>
                    <div className='font'>Our</div>
                    <div className='font' id="service-text">Services</div>
            </div>
            <div className='lorum-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    
       </div>
       
      </div>
      <div className='second-page-bottom'>
       <div className='second-page-bottom-mid'>
         <div className='firstpart'>
         
           <div className='upper'>

               <div className='upperone'>
                
                   <img src={meeting} className="meeting-img"></img>
               </div>
               <div className="uppermid"></div>
                <div className='uppertwo'>
                <div className='upper-two-mid-one'></div>
                <div className='upper-two-mid'>
                <div className='scooter-text'>advanced table</div>
            <div className='scooter-text'>booking</div>
            <div className='scooter-text-grey'>Lorem Ipsum is simply</div>
            <div className='scooter-text-grey'>  dummy industry </div>
            <div className='scooter-text-grey'>text of the printing </div>
            </div>
                </div>

           </div>
           <div className='lower'> 

                 
               <div className='lowerone'>
               

               <div className='upper-two-mid-one'></div>
                <div className='upper-two-mid'>
                <div className='scooter-text'>Food for Free</div>
            <div className='scooter-text'>24/7</div>
            <div className='scooter-text-grey'>Lorem Ipsum is simply</div>
            <div className='scooter-text-grey'>  dummy industry </div>
            <div className='scooter-text-grey'>text of the printing </div>
            </div>


               </div>
               <div className='lowermid'>

               </div>
                <div className='lowertwo'>
                    <img src={plate}></img>
                </div>
                </div>
        </div>
        
        <div className='mid-box'>

        </div> 

         <div className='secondpart'> 
           <div className='secondpart-img-txt'>
          <img src={path} className="scooter-img"></img>
          </div>
          <div className='secondpart-img-txt2'>
            <div className='scooter-text'>free home delivery</div>
            <div className='scooter-text'>at your door step</div>
            <div className='scooter-text-grey'>Lorem Ipsum is simply</div>
            <div className='scooter-text-grey'>  dummy industry </div>
            <div className='scooter-text-grey'>text of the printing </div>
            <div></div>
          </div>

         </div>
         </div>
      </div>
     
    </div>
    
  )
}
