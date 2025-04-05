import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const VehicleCard = ({ item }) => {
    const { dispatch } = useGlobalReducer();

    // Define la función para agregar a favoritos
    const addToFavorites = (uid, name) => {
        dispatch({ type: 'add_to_favorites', payload: { uid, name, type: 'vehicle' } });
    };

    return (
        <div className="card flex-shrink-0" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="Vehicle card" />
            <div className="card-body d-flex flex-column justify-content-between"> {/* Agregamos clases de Flexbox */}
                <div> {/* Contenedor para el texto */}
                    <h5 className="card-title mb-5">{item.name}</h5>
                    <p className="card-text">Vehicle Class: {item.vehicle_class}</p>
                    <p className="card-text">Model: {item.model}</p>
                    <p className="card-text">Passengers: {item.passengers}</p>
                </div>
                <div className="d-flex justify-content-between mt-5"> {/* Contenedor para los botones */}
                    <Link to={`/detail/vehicle/${item.uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => addToFavorites(item.uid, item.name)}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;
