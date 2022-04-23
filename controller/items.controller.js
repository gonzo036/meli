/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains search on server
*/

const fetch = require('node-fetch');

const {apiUrl} = require('../client/helpers');

const index = async (req, res) => {
    try {
        const {item} = req.params;
        const url = `${apiUrl}/items?q=${item}&limit=${20}`;
        const params = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return res.status(200).json( result ? result : null);
    } catch (error) {
        return res.status(500).json(error);
    }
};
const show = async (req, res) => {
    try {
        const {id} = req.params;
        const url = `${apiUrl}/items/${id}`;
        const params = {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return res.status(200).json( result ? result : null);
    } catch (error) {
        return res.status(500).json(error);
    }
};
  

module.exports = {
    index,
    show
}