import './App.css';
import HomeIcon from '../homeicon.svg';
import { Link } from "react-router-dom";


export default function Faq() {
  return (
    <div className="about-page">
      <h2 className="about-heading">About MovieLand</h2>
      <div className="faq-item">
        <h3 className="faq-question">What tools did we use to build the project?</h3>
        <p className="faq-answer">
          We used ReactJS for developing our website and utilized AWS Amplify for hosting it publicly.
        </p>
      </div>


      <div className="faq-item">
        <h3 className="faq-question">Where did we retrieve the movie information from?</h3>
        <p className="faq-answer">
          We obtained movie information from the OMDB database via an API key, accessible to the public, and displayed it on our website.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">What is the purpose of our website?</h3>
        <p className="faq-answer">
          Our website aims to provide users with a quick and simple way to discover their favorite movies.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Where did we get inspired from?</h3>
        <a href="https://moviesland.ink/" class="highlighted-link" target="_blank">Movies Land</a>
        <p className='faq-answer'> a website for streaming or downloading movies, or a platform for movie reviews and information. </p>

      </div>
      <Link to="/home" className="home-link">
        <img src={HomeIcon} alt="Home" className="home-icon" />
      </Link>

    </div>
  );
}
