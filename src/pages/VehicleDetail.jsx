import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

const VehicleDetail = () => {
    const { store } = useGlobalReducer();
    const { uid } = useParams();

    console.log("Estado global (store.vehicles):", store.vehicles);

    const detail = store.vehicles.find((vehicle) => vehicle.uid === uid);

    if (!detail) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col-md-8">
                    <img
                        src="https://picsum.photos/800/600"
                        alt={`${detail.name || "Vehicle"} image`}
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-4 mt-5">
                    <h2 className="text-danger">{detail.name || "Vehicle"}</h2>
                    <p className="text-muted">
                        Explore the details of this vehicle, including its length, model, passengers, cargo capacity, cost, and manufacturer.
                    </p>
                </div>
            </div>

            <hr className="text-danger" />

            <div className="row text-center">
                <div className="col-4">
                    <h5 className="text-danger">Length</h5>
                    <p className="text-muted">{detail.length || "N/A"}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Model</h5>
                    <p className="text-muted">{detail.model || "N/A"}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Passengers</h5>
                    <p className="text-muted">{detail.passengers || "N/A"}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Cargo Capacity</h5>
                    <p className="text-muted">{detail.cargo_capacity || "N/A"}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Cost</h5>
                    <p className="text-muted">{detail.cost_in_credits || "N/A"}</p>
                </div>
                <div className="col-4">
                    <h5 className="text-danger">Manufacturer</h5>
                    <p className="text-muted">{detail.manufacturer || "N/A"}</p>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetail;
