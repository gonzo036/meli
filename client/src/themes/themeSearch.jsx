/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains theme general
*/

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import Logo from "./../assets/images/logo.png";
import Search from "./../assets/images/search.png";
import { useForm } from "../hooks/useForm";
export default function ThemeSearch({ children }) {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const [{ termino }, handleInputChange] = useForm({ termino: q });

    const handleSharch = (e) => {
        e.preventDefault();
        if (termino.length === 0) {
            navigate("/");
        } else if (location.pathname === "/items/search") {
            navigate(`?q=${termino}`);
        } else {
            navigate(`/items/search?q=${termino}`);
        }
    };
    return (
        <>
            <header>
                <nav>
                    <div className="header_search_box">
                        <form className="search_box" onSubmit={handleSharch}>
                            <img
                                src={Logo}
                                alt="Logo"
                                className="logo_mercadolibre"
                                onClick={() => navigate("/")}
                            />
                            <input
                                type="text"
                                className="search-text"
                                name="termino"
                                placeholder="Nunca dejes de buscar"
                                value={termino}
                                onChange={handleInputChange}
                            />
                            <button className="search_button" type="submit">
                                <img src={Search} alt="Search" />
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
            <div className="wrapper">{children}</div>
        </>
    );
}
