import React from 'react'
import Food from "../Assets/Food.png"
import "./Container.css"
import Rectangle from "../Assets/Rectangle .png"
import Rect from "../Assets/Rect5.PNG"
import Go from "../Assets/GO.png"
import tree from "../Assets/Pngtree.png"
import group1 from "../Assets/Group 3.png"
import group2 from "../Assets/Group 4.png"


export default function Container() {
  return (
    <div>
      <div >
      <img src={Rect}  className="rect"></img>
      </div>

        <div className='container'>
        
          <div className='text'>
          <div className='font'>Discover Restaurant</div>
          <div className='font'>& Delicious Food</div>
          <div className='searchbox'> 
             <input type="text" className='searchbar' placeholder="search restaurant"></input>      
              <img src={Rectangle} className="rectangle"></img>
              <img src={Go} className="go"></img>
          </div>

          </div>


          <div className='bigfood'>
        <img src={tree} className="leaf"></img>        
        <img src={Food} id="food"></img>
                
        </div>
   
        </div>
        <div className='bars'>
         
         <img src={group2} className="img1" ></img>
          
         <img src={group1}></img>
          </div>
   
    </div>
  )
}
