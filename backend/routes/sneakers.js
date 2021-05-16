import express from 'express';
import { getSneakers, getSneakersMostPopular, getSneakersHighest, getSneakersRecommended, getSneakersById } from '../controllers/sneakers.js';

const router = express.Router();

router.get('/all', getSneakers);
router.get('/mostPopular', getSneakersMostPopular);
router.get('/highestSelling', getSneakersHighest);
router.get('/recommended', getSneakersRecommended);
router.get('/:id', getSneakersById);

export default router;

