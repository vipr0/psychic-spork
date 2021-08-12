import express     from 'express';
import controllers from './controllers.js';

const router = express.Router();

router.get('/bidder', controllers.getBidder);
router.get('/auction', controllers.limitRequest, controllers.getAuction);

export default router;