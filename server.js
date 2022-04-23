/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains config server 
*/


const express = require('express');
const app = express(); 
const apiRoutes = require('./client/apiRoutes');
const port = process.env.PORT || 3000; 
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use('/api', apiRoutes);
