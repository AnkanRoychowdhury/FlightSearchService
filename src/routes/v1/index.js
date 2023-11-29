const express = require('express');
const { CityController, AirportController, FlightController } = require('../../controllers/index');
const { FlightMiddleWares } = require('../../middlewares/index');


const router = express.Router();


// City Routes
router.post('/city',CityController.create);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/cities',CityController.getAll);
router.delete('/city/:id',CityController.destroy);

// Airport Routes
router.post('/airport',AirportController.create);
router.post('/airports',AirportController.bulkCreate);
router.get('/airport/:id',AirportController.get);
router.get('/airports',AirportController.getAll);
router.patch('/airport/:id',AirportController.update);
router.delete('/airport/:id',AirportController.destroy);


router.post('/flights', FlightMiddleWares.validateCreateFlight, FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update);

module.exports = router;

