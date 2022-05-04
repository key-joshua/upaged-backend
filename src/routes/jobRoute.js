import Router from 'express';
import paginate from '../middlewares/paginateMiddleware';
import jobController from '../controllers/jobController';

const jobRouter = Router();
jobRouter
  .get('/select-jobs', jobController.selectJobs, paginate.paginateData);

export default jobRouter;
