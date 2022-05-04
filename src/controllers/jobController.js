import { INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from 'http-status';

import responseHelper from '../helpers/responseHelper';
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
     * @returns {object} return obeject of jobs.
     */
  static async selectJobs(req, res) {
    try {
      const data = await jobHelper.findJobs();

      if (data.length < 1) {
        responseHelper.handleError(NOT_FOUND, 'Jobs not found at the moment');
        return responseHelper.response(res);
      }

      responseHelper.handleSuccess(OK, 'Jobs viewed successfully', data);
      return responseHelper.response(res);
    } catch (error) {
      responseHelper.handleError(INTERNAL_SERVER_ERROR, error.toString());
      return responseHelper.response(res);
    }
  }
}

export default JobController;
