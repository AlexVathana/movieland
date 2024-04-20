import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Gif from '../giphy.gif'

export default function Home() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleGifSize = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div>
      <h1 className='home'>Welcome to MovieLand</h1>
      <p className='paragraph'>Explore our collection of movies</p>
      <Link to="/MoviePage">
        <button className='button1'>Go to Movie Page</button>
      </Link>
      <Link to= "/about"> 
        <button className='button2'>Go to About Page</button>
      </Link>
      <Link to= "/faq"> 
        <button className='button2'>Go to Faq</button>
      </Link>
      <Link to= "/contact"> 
        <button className='button2'>Contact</button>
      </Link>
      <img src={Gif} className={isEnlarged ? 'gif enlarged' : 'gif'} onClick={toggleGifSize}></img>
    </div>
  );
}
