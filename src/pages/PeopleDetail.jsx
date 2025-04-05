import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const PeopleDetail = () => {
    const { store } = useGlobalReducer();
    const { uid } = useParams();

    console.log("Estado global (store.people):", store.people); // Depuración del estado global

    const detail = store.people.find((people) => people.uid === uid);

    if (!detail) {
        return <p>Loading...</p>; // Manejo de caso donde los datos no están disponibles
    }

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-8">
                    <img
                        src="https://picsum.photos/800/600"
                        alt={`${detail.name || "Cargando..."} image`}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-4 mt-5">
                    <h2>{detail.name || "Detail"}</h2>
                    <p className="text-muted">
                        {detail.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar facilisis viverra. Suspendisse mollis dictum bibendum. Suspendisse luctus, nunc vel euismod venenatis, lorem magna lobortis nunc, ac consequat elit velit eget lectus. Maecenas eget lobortis metus, vitae euismod metus. Nulla tortor tortor, tempus quis fermentum quis, imperdiet venenatis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec suscipit mollis quam ac tincidunt. Nunc aliquam dui magna, ac viverra neque faucibus nec. "
                        }
                    </p>
                </div>
            </div>
            <hr className="text-danger" />
            <div className="row text-center">
                <div className="col-2">
                    <h5 className="text-danger">Height</h5>
                    <p className="text-muted">{detail.height}</p>
                </div>
                <div className="col-2">
                    <h5 className="text-danger">Mass</h5>
                    <p className="text-muted">{detail.mass}</p>
                </div>
                <div className="col-2">
                    <h5 className="text-danger">Hair Color</h5>
                    <p className="text-muted">{detail.hair_color}</p>
                </div>
                <div className="col-2">
                    <h5 className="text-danger">Skin Color</h5>
                    <p className="text-muted">{detail.skin_color}</p>
                </div>
                <div className="col-2">
                    <h5 className="text-danger">Eye Color</h5>
                    <p className="text-muted">{detail.eye_color}</p>
                </div>
                <div className="col-2">
                    <h5 className="text-danger">Birth Year</h5>
                    <p className="text-muted">{detail.birth_year}</p>
                </div>
            </div>
        </div>
    );
};

export default PeopleDetail; // Exportación por defecto
