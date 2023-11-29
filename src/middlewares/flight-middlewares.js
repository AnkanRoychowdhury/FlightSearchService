const { ClientErrorCodes } = require('../utils/error-codes');

const validateCreateFlight = (req,res,next) => {
    const data = req.body;
    if ( !data.flightNumber || !data.airplaneId || !data.departureAirportId || !data.arrivalAirportId || !data.arrivalTime || !data.departureTime || !data.price )
    {   
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creating flight',
            err: 'Missing mandatory fields to create flight'
        })
    }
    next();
}

module.exports = {
    validateCreateFlight
}