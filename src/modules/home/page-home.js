/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavBar from "../navigation/navbar";
import logo from "../../assets/logos/logo_transparent.png";

function Home()
{
  const onClickGit = () =>
  {
    window
      .open("https://github.com/MaciejDabrowskii?tab=repositories", "_blank")
      .focus();
  };

  return (
    <div className="home-container">
      <div className="home-contents">
        <div className="home-logo-container">
          <img src={logo} className="home-logo" alt="logo" />
        </div>
        <div className="home-contents-right">
          <NavBar />
          <div className="home-about-container">
            <h3 className="home-about-header">RobCo</h3>
            <p className="home-about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, ex non semper tristique, dolor metus bibendum felis, nec aliquam nulla mi at tellus. Aenean ut est eu eros tristique euismod. Praesent placerat nec libero eu imperdiet. Aliquam tempor tristique tellus, ut viverra nibh semper nec. Donec id hendrerit leo.</p>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faGithub}
        className="fa-solid git-icon"
        onClick={onClickGit}
      />
    </div>
  );
}
export default Home;
