import express from 'express';
import { OrderControllers } from './Order.controller';

const router = express.Router();
//router for getting order
router.post('/', OrderControllers.createOrder);
//router for getting revenue
router.get('/revenue', OrderControllers.totalRevenue);

export const OrderRoutes = router;