import express from 'express';
import Parcels from '../db/parcels';

const router = express.Router();

// Get all parcels
router.get('/', (req, res) => {
  const parcelDeliveries = [];
  Parcels.map(parcel => parcelDeliveries.push(parcel.parcel));
  res.status(200).json({
    success: true,
    message: 'Parcels retrieved successfully',
    parcels: parcelDeliveries
  });
});

export default router;
