import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status';

import responseHelper from '../helpers/responseHelper';
import pagination from '../helpers/paginateHelper';
import jobHelper from '../helpers/jobHelper';

/**
* This class contains all methods (functions) required to handle
* Select all jobs function.
*/
class JobController {
  /**
     * Handle selectJobs.
     * @param {object} req user request.
     * @param {object} res data response.
     * @param {object} next move data response.
     * @returns {object} return obeject of jobs.
     */
  static async selectJobs(req, res, next) {
    try {
      const { start, end, pages, skip, paginate } = await pagination.paginateData(req.query);
      const fetchedData = await jobHelper.findJobs(skip, start);
      const countedData = await jobHelper.countJobs();

      const allDatata = fetchedData;
      const countAllData = countedData;

      if (countAllData < 1) {
        responseHelper.handleError(NOT_FOUND, 'Jobs not found at the moment');
        return responseHelper.response(res);
      }

      req.data = { allDatata, countAllData, start, end, pages, skip, paginate };
      next();
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default JobController;
