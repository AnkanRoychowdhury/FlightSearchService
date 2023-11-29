const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const { City, Airport } = require('./models/index');

const setupAndStartServer = async () => {

    // Create the express object
    const app  = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server running on ${PORT}`);
    });
}

setupAndStartServer();