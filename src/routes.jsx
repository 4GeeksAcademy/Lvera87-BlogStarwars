// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import PeopleDetail from "./pages/PeopleDetail.jsx"; // Asegúrate de que la ruta sea correcta
import PlanetDetail from "./pages/PlanetDetail.jsx"; // Importa el nuevo componente
import VehicleDetail from "./pages/VehicleDetail.jsx"; // Importa el nuevo componente

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="/detail/people/:uid" element={<PeopleDetail />} /> {/* Ruta dinámica */}
      <Route path="/detail/planet/:uid" element={<PlanetDetail />} /> {/* Ruta para PlanetDetail */}
      <Route path="/detail/vehicle/:uid" element={<VehicleDetail />} /> {/* Ruta para VehicleDetail */}
    </Route>
  )
);