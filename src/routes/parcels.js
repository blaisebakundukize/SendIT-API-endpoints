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

// Get a specific parcels
router.get('/:parcelId', (req, res) => {
  const parcelDelivery = Parcels.filter(
    parcel => parcel.parcel.parcelId === req.params.parcelId
  );

  if (parcelDelivery.length > 0) {
    return res.status(200).json({
      success: true,
      message: `Parcel of id ${req.params.parcelId} retrieved successfully`,
      parcel: parcelDelivery[0]
    });
  }
  return res.status(404).json({
    success: false,
    message: `Parcel of id ${req.params.parcelId} does not exist`
  });
});

export default router;
