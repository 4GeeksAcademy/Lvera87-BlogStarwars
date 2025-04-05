import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


const PlanetDetail = () => {
    const { store } = useGlobalReducer();
    const { uid } = useParams(); // Captura el parámetro de la URL
    

    const detail =store.planets.find((planet)=>planet.uid===uid)

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-8">
                    <img
                        src="https://picsum.photos/800/600"
                        alt={`${detail.name || "Planet"} image`}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-4 mt-5">
                    <h2 className="text-danger">{detail.name || "Planet"}</h2>
                    <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar facilisis viverra. Suspendisse mollis dictum bibendum. Suspendisse luctus, nunc vel euismod venenatis, lorem magna lobortis nunc, ac consequat elit velit eget lectus. Maecenas eget lobortis metus, vitae euismod metus. Nulla tortor tortor, tempus quis fermentum quis, imperdiet venenatis turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec suscipit mollis quam ac tincidunt. Nunc aliquam dui magna, ac viverra neque faucibus nec.
                    </p>
                </div>
            </div>

            <hr className="text-danger" />

            <div className="row text-center">
                <div className="col-4">
                    <h5 className="text-danger">Climate</h5>
                    <p className="text-muted">{detail.climate}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Population</h5>
                    <p className="text-muted">{detail.population}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Terrain</h5>
                    <p className="text-muted">{detail.terrain}</p>
                </div>
            </div>
        </div>
    );
};

export default PlanetDetail;
