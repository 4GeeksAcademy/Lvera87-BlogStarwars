// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import PeopleDetail from "./components/PeopleDetail.jsx";


export const router = createBrowserRouter(
  createRoutesFromElements(



    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/people/:uid" element={<PeopleDetail />} />


    </Route>
  )
);