
import './App.css';
import React  from 'react';
import Dashboard from "./components/pages/Dashboard";
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import CategoryDetails from "./components/pages/CategoryDetails";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Dashboard />} />
    <Route path="/categoryDetails" element={<CategoryDetails/>}/>
  </Route>
);

const router = createBrowserRouter(routeDefinitions)

function App() {

 
  return (
    <>Shady APP
    <RouterProvider router= {router}></RouterProvider>
    </>
    
  );
}

export default App;
