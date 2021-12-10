import React from 'react';
import Data from "./components/Data";
import Header from './components/Navbar'
import MyCarousel from './components/Carousel';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <br></br> <br></br>
      <MyCarousel />
      <br></br> <br></br>
      <Data />
    </>
  );
}

export default App;