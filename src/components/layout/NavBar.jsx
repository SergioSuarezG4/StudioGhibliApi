import logo from '../../assets/img/Logo2.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to='/'><img className='img-fluid img-logo' src={logo} alt="Logo Studio Ghibli" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  