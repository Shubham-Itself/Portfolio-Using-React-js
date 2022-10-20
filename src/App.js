import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Index } from './Index.jsx/Index';
import { Service } from './Service/Service';
import Experience from './Experience/Experience';
import About from './about/About';
import PortFolio from './PortFolio/PortFolio';
import Review from './Review/Review';
import Form from './Form/Form';
import Footer from './Footer/Footer';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Index/>
    <Service/>
    <Experience/>
    <About/>
    <PortFolio/>
    <Review/>
    <Form/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
