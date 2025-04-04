import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer';

const PeopleCard = ({ item }) => {
    const { dispatch } = useGlobalReducer();

    const addToFavorites = (uid, name) => {
        dispatch({ type: 'add_to_favorites', payload: { uid, name, type: 'people' } });
    };

    return (
        <div className="card flex-shrink-0" style={{ width: "18rem" }}>
            <img 
                src="https://picsum.photos/200/200" 
                className="card-img-top" 
                alt={`${item.name} image`} // Asegura que el atributo alt sea descriptivo
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title mb-5">{item.name}</h5>
                    <p className="card-text">Gender: {item.gender}</p>
                    <p className="card-text">Hair Color: {item.hair_color}</p>
                    <p className="card-text">Eye Color: {item.eye_color}</p>
                </div>
                <div className="d-flex justify-content-between mt-5">
                    <Link to={`/people/${item.uid}`} className="btn btn-outline-primary">
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

export default PeopleCard;
