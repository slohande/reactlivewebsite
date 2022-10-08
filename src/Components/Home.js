import React from 'react'
import Header from './Header'
import Container from './Container'
import Services from './Services'
import Socialmediapage from './Socialmediapage'
import "./Home.css"
export default function Home() {
  return (
    <div className="home-background">
     <Header />
     <Container/>
     <Services/>
     <Socialmediapage/>
    </div>
  )
}
