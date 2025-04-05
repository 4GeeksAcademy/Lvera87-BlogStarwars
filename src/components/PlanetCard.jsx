import React from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from 'react-router-dom';

const PlanetCard = ({ name, population, climate, terrain, uid }) => {
    const { dispatch, store} = useGlobalReducer();
    

    // Define la función para agregar a favoritos
    const setFavorite = (uid, name) => {
        // Check if the item is already in favorites
        const isFavorite = store.favorites.some(fav => fav.uid===uid && fav.name===name); //  esto verifica si el uid ya está en favoritos
        console.log(isFavorite);
        

        if (isFavorite) {
            // Dispatch action to remove from favorites
            dispatch({ type: 'remove_from_favorites', payload: { uid, name } });
        } else {
            // Dispatch action to add to favorites
            dispatch({ type: 'add_to_favorites', payload: { uid, name, type: 'planet' } });
        }
    };

    return (
        <div className="card flex-shrink-0" style={{ width: "18rem" }}>
            <img src="https://picsum.photos/200/200" className="card-img-top" alt="Planet card" />
            <div className="card-body d-flex flex-column justify-content-between"> {/* Agregamos clases de Flexbox */}
                <div> {/* Contenedor para el texto */}
                    <h5 className="card-title mb-5">{name}</h5>
                    <p className="card-text">Population: {population}</p>
                    <p className="card-text">Climate: {climate}</p>
                    <p className="card-text">Terrain: {terrain}</p>
                </div>
                <div className="d-flex justify-content-between mt-5"> {/* Contenedor para los botones */}
                    <Link to={`/detail/planet/${uid}`} className="btn btn-outline-primary">
                        Learn more!
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => setFavorite(uid, name)}

                    >
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanetCard;
