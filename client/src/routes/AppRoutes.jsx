/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains routes
*/

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routesClient } from "../config/routes";
import NotFound404 from "../pages/NotFound404";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routesClient.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <route.Layout>
                                    <route.Component />
                                </route.Layout>
                            }
                        />
                    );
                })}
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
};
