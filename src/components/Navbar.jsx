import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo as a Link to the home page */}
        <Link to="/" className="navbar-brand">
          <img
            src="https://c0.klipartz.com/pngpicture/116/649/gratis-png-bb-8-star-wars-el-clon-wars-star-wars-day-the-force-blikvanger.png"
            alt="Logo"
            width="60"
            height="60"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              {/* Use a button for the dropdown toggle */}
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/action">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/another-action">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/something-else">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

