import './styles.css';
import {ReactComponent as GitHubIcon} from 'assets/img/GitHub.svg';

function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/deltavitor">
            <div className="dsmovie-contact-container">
              <GitHubIcon/>
              <p className="dsmovie-contact-link">/deltavitor</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
