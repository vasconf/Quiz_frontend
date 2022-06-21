import React from 'react'
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom';
import { RoutesMappingApplication } from './config/RoutesMappingApplication';

 //import Login from './pages/Login';

export default function Routes(){
    return (
       <BrowserRouter>
       <Switch>
          {
            RoutesMappingApplication.map(routes => (
                <Route path={routes.path} element={routes.page} />
            ))
          }
       </Switch>
       </BrowserRouter>
    );
}