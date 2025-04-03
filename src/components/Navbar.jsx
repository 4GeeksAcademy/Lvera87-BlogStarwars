import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import useGlobalReducer from "../hooks/useGlobalReducer"; // Importa el hook existente

export const Navbar = () => {
  // Usa el hook para acceder al estado global y al despachador
  const { store, dispatch } = useGlobalReducer();

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
                Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" style={{ maxHeight: "300px", overflowY: "auto" }}>
                {store.favorites.length > 0 ? (
                  store.favorites.map((item) => (
                    <li
                      key={item.uid}
                      className="dropdown-item d-flex justify-content-between align-items-center"
                      style={{ padding: "0.5rem 1rem" }}
                    >
                      <span>{item.name}</span>
                      <i
                        className="bi bi-trash"
                        style={{ cursor: "pointer", color: "black" }}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent the dropdown from closing
                          dispatch({
                            type: 'remove_from_favorites',
                            payload: { uid: item.uid, name: item.name }
                          });
                        }}
                      ></i>
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item text-center text-muted" style={{ padding: "0.5rem 1rem" }}>
                    No favorites added
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

