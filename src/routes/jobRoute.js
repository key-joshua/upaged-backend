import Router from 'express';
import jobController from '../controllers/jobController';

const jobRouter = Router();
jobRouter
  .get('/select-jobs', jobController.selectJobs);

export default jobRouter;
