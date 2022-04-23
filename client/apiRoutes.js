/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains routes url
*/


const { Router } = require ("express");
const  { index, show } = require ("../controller/items.controller");
const router = Router();

router.get('/search-items/:item', index);
router.get('/item/:id', show);

module.exports = router;

