import express from 'express';
import { getBrands } from '../controllers/brands.js';

const router = express.Router();

router.get('/all', getBrands);

export default router;

