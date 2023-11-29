const { AirportService } = require('../services/index');

const airportService = new AirportService(); 

const create = async (req,res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created a Airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}

const bulkCreate = async (req,res) => {
    try {
        const airports = await airportService.bulkCreate(req.body);
        return res.status(201).json({
            data: airports,
            success: true,
            message: 'Successfully created the airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create all airports',
            err: error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the Airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the airport',
            err: error
        });
    }
}

const update = async (req,res) => {
    try {
        const data = req.body;
        const airportId = req.params.id;
        const airport = await airportService.update(airportId,data);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully updated the airport',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }
}

const get = async (req,res) => {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully get the airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the airport',
            err: error
        });
    }
}

const getAll = async (req,res) => {
    try {
        const airports = await airportService.getAirports();
        return res.status(200).json({
            data: airports,
            success: true,
            message: 'Successfully fetched the airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetched the airport',
            err: error
        });
    }
}

module.exports = {
    create,
    bulkCreate,
    destroy,
    update,
    get,
    getAll
}