import Router from 'express';
import jobRouter from './jobRoute';

const router = Router();
router.use('/jobs', jobRouter);

export default router;
