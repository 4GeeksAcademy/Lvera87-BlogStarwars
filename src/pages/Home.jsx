import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetCard from "../components/PlanetCard.jsx";
import VehicleCard from "../components/VehicleCard.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer();

    console.log("Estado global (store):", store); // Depuración del estado global

    // Obtener datos de personajes
    const getPeople = async () => {
        try {
            const response = await fetch('https://www.swapi.tech/api/people/');
            if (!response.ok) {
                throw new Error("Ocurrió un error al llamar el endpoint 'people'");
            }

            const data = await response.json();
            const processedData = await Promise.all(
                data.results.map(async (item) => {
                    const detailsResponse = await fetch(item.url);
                    const details = await detailsResponse.json();
                    return {
                        uid: item.uid,
                        name: details.result.properties.name,
                        gender: details.result.properties.gender,
                        hair_color: details.result.properties.hair_color,
                        eye_color: details.result.properties.eye_color,
                    };
                })
            );

            dispatch({ type: 'set_people_data', payload: processedData });
        } catch (error) {
            console.error("Error al obtener personajes:", error);
        }
    };

    // Obtener datos de planetas
    const getPlanets = async () => {
        try {
            const response = await fetch('https://www.swapi.tech/api/planets/');
            if (!response.ok) {
                throw new Error("Ocurrió un error al llamar el endpoint 'planets'");
            }

            const data = await response.json();
            const processedData = await Promise.all(
                data.results.map(async (item) => {
                    const detailsResponse = await fetch(item.url);
                    const details = await detailsResponse.json();
                    return {
                        uid: item.uid,
                        name: details.result.properties.name,
                        population: details.result.properties.population,
                        climate: details.result.properties.climate,
                        terrain: details.result.properties.terrain,
                    };
                })
            );

            dispatch({ type: 'set_planets_data', payload: processedData });
        } catch (error) {
            console.error("Error al obtener planetas:", error);
        }
    };

    // Obtener datos de vehículos
    const getVehicles = async () => {
        try {
            const response = await fetch('https://www.swapi.tech/api/vehicles/');
            if (!response.ok) {
                throw new Error("Ocurrió un error al llamar el endpoint 'vehicles'");
            }

            const data = await response.json();
            const processedData = await Promise.all(
                data.results.map(async (item) => {
                    const detailsResponse = await fetch(item.url);
                    const details = await detailsResponse.json();
                    return {
                        uid: item.uid,
                        name: details.result.properties.name,
                        vehicle_class: details.result.properties.vehicle_class,
                        model: details.result.properties.model,
                        passengers: details.result.properties.passengers,
                    };
                })
            );

            dispatch({ type: 'set_vehicles_data', payload: processedData });
        } catch (error) {
            console.error("Error al obtener vehículos:", error);
        }
    };

    // Llamar a las funciones de obtención de datos
    useEffect(() => {
        getPeople();
        getPlanets();
        getVehicles();
    }, []);

    return (
        <div className="container-main p-5 mt-5" style={{ marginTop: "20rem" }}>
            <div className="section-block">
                <h2 className="text-danger">Characters</h2> {/* Este título debería renderizarse */}
                <div className="text-center mt-4 d-flex overflow-auto gap-4">
                    {store.people && store.people.length > 0 ? (
                        store.people.map((item) => (
                            <PeopleCard key={item.uid} item={item} />
                        ))
                    ) : (
                        <p>No hay datos de personajes disponibles.</p>
                    )}
                </div>
            </div>

            <div className="section-block">
                <h2 className="text-danger mt-5 mb-0">Planets</h2>
                <div className="text-center mt-4 d-flex overflow-auto gap-4">
                    {store.planets && store.planets.length > 0 ? (
                        store.planets.map((item) => (
                            <PlanetCard
                                uid={item.uid}
                                key={item.uid}
                                name={item.name}
                                population={item.population}
                                climate={item.climate}
                                terrain={item.terrain}
                            />
                        ))
                    ) : (
                        <p>No hay datos de planetas disponibles.</p>
                    )}
                </div>
            </div>

            <div className="section-block">
                <h2 className="text-danger mt-5 mb-0">Vehicles</h2>
                <div className="text-center mt-4 d-flex overflow-auto gap-4">
                    {store.vehicles && store.vehicles.length > 0 ? (
                        store.vehicles.map((item) => (
                            <VehicleCard
                                key={item.uid}
                                item={item}
                            />
                        ))
                    ) : (
                        <p>No hay datos de vehiculos disponibles.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
