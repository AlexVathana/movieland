import './App.css';
import HomeIcon from '../homeicon.svg';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <h2 className="about-heading">About MovieLand</h2>
      <p className="about-paragraph">
        Welcome to MovieLand, your ultimate destination for discovering and exploring a vast collection of movies!
      </p>
      <p className="about-paragraph">
        At MovieLand, we are passionate about movies and aim to provide you with an immersive movie-watching experience. Our platform allows you to search for your favorite movies and explore new ones with ease.
      </p>
      <p className="about-paragraph">
        Using the power of the Open Movie Database (OMDb) API, we fetch comprehensive movie information, including details about cast, ratings, plot summaries, and much more. Whether you're a casual moviegoer or a die-hard cinephile, MovieLand has something for everyone.
      </p>
      <p className="about-paragraph">
        Feel free to search for your favorite movies using the search bar above. If you're not sure where to start, why not try searching for "superman" to discover some classic superhero adventures?
      </p>
      <p className="about-paragraph">
        Thank you for choosing MovieLand for your movie-watching needs. Sit back, relax, and enjoy the show!
      </p>
      <a href="mailto:pvathana0997@dbu.edu" class='highlighted-link'>Email</a>

      <Link to="/home" className="home-link">
        <img src={HomeIcon} alt="Home" className="home-icon" />
      </Link>
    </div>
  );
}
