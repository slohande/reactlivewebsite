import * as React from 'react';
import Link from '@mui/material/Link';
import logo from '../Assets/logo.png'
import Mask from "../Assets/Mask.png"
import Icon from "../Assets/Icon.png"
import  './Header.css'
export default function Header() {
  return (
   <div>
    <nav className="nav" >
      
       <div className="img1">
       <img src={logo} className="logo"></img>
       </div>


    <ul className="links">

    
      
        <Link  style={{ textDecoration: 'none',color:'black'  }} >
            <p >MenuOne </p>
        </Link>
        <Link style={{ textDecoration: 'none',color:'black' }}>
            <p>MenuTwo </p>
        </Link>
        <Link style={{ textDecoration: 'none',color:'black'}}>
            <p >MenuThree </p>
        </Link>
        <Link style={{ textDecoration: 'none',color:'black' }} >
            <p>MenuFour </p>
        </Link>
    </ul>
    <div className="img2">
     
    <img src={Mask} className="mask"></img>
    <p className='user'>User</p>
    <img src={Icon} className="icon"></img>
   
    </div>
    </nav>
      </div> 
 
  )
}
