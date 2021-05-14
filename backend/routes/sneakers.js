import express from 'express';
import { getSneakers } from '../controllers/sneakers.js';

const router = express.Router();

router.get('/all', getSneakers);

export default router;

