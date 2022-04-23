/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains url search
*/

export const getProductsApi = async (termino) => {
    try {
    const url = `/api/search-items/${termino}`;
    const params = {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    };
        const response = await fetch(url, params);
        const result = await response.json();
        return result ? result : null;
    } catch (error) {
        console.log(error);
    }
};

export const getProductByIdApi = async (id) => {
    try {
        const url = `/api/item/${id}`;
        const params = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        };
        const response = await fetch(url, params);
        const result = await response.json();
        return result ? result : null;
        } catch (error) {
            console.log(error);
    }
};
