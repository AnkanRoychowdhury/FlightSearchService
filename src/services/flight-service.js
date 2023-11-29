const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor () {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight (data) {
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: 'Arrival Time cannot be lesser than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }

    async getFlightData(data) {
        try {
            const flights = await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }

    async getFlight(data) {
        try {
            const flight = await this.flightRepository.getFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data) {
        try {
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
}

module.exports = FlightService;