import'./App.css'
import { Link } from "react-router-dom";

export default function Home() {
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


    </div>
  );
}
