/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains List product result styles
*/
import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import SearchList from "../components/SearchList";
import { getProductsApi } from "../api/productApi";
import Breadcrumb from "../components/Breadcrumb";
import { ProductContext } from "../components/context/ProductContext";

export default function Search() {
    const [products, setProducts] = useState(null);
    const location = useLocation();
    const { setCategories } = useContext(ProductContext);

    const { q } = queryString.parse(location.search);

    useEffect(() => {
        getProductsApi(q, 4)
            .then((response) => {
                if (response?.susecces) {
                    setProducts(response.items);
                    setCategories(response.categories);
                } else {
                    setProducts([]);
                }
            })
            .catch((err) => {
                setProducts([]);
                setCategories([]);
                console.log(err);
            });
    }, [q]);

    if (!products) {
        return <></>;
    }
    return (
        <>

            <Breadcrumb />
            {products.length > 0 ? (
                <div className="list_box_items">
                    {products.map((product) => (
                        <SearchList key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p>No se encontraron productos</p>
            )}
        </>
    );
}
