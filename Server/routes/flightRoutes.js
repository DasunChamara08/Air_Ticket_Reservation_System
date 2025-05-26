// flightRoutes.js

import express from 'express';
import { Flight } from '../models/flightModel.js';

const router = express.Router();

// CREATE a new flight
router.post('/', async (req, res) => {
  try {
    const {
      flightNumber,
      departureTime,
      arrivalTime,
      date,
      destination,
      flyingHours,
      specialNews,
    } = req.body;

    // Check for required fields
    if (
      !flightNumber ||
      !departureTime ||
      !arrivalTime ||
      !date ||
      !destination ||
      !flyingHours
    ) {
      return res.status(400).send({
        message:
          'Send all required fields: flightNumber, departureTime, arrivalTime, date, destination, flyingHours',
      });
    }

    const newFlight = {
      flightNumber,
      departureTime,
      arrivalTime,
      date,
      destination,
      flyingHours,
      specialNews,
    };

    const flight = await Flight.create(newFlight);
    return res.status(201).json(flight);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// READ - Get all flights
router.get('/', async (req, res) => {
  try {
    const flights = await Flight.find({});
    return res.status(200).json({
      count: flights.length,
      data: flights,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// READ - Get a flight by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await Flight.findById(id);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    return res.status(200).json(flight);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// UPDATE a flight
router.put('/:id', async (req, res) => {
  try {
    const {
      flightNumber,
      departureTime,
      arrivalTime,
      date,
      destination,
      flyingHours,
      specialNews,
    } = req.body;

    if (
      !flightNumber ||
      !departureTime ||
      !arrivalTime ||
      !date ||
      !destination ||
      !flyingHours
    ) {
      return res.status(400).send({
        message:
          'Send all required fields: flightNumber, departureTime, arrivalTime, date, destination, flyingHours',
      });
    }

    const { id } = req.params;

    const result = await Flight.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
    });

    if (!result) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    return res.status(200).json({ message: 'Flight updated successfully', data: result });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// DELETE a flight
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Flight.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    return res.status(200).json({ message: 'Flight deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
