import JobSchema from '../models/jobSchema';

/**
* This class contains all methods (functions) required to handle
* Select all jobs function.
*/
class JobHelper {
  /**
   * findjobs from Jobs table.
   * @param {string} skip where to stop.
   * @param {string} start where to start.
   * @returns {object} of all jobs.
   */
  static async findJobs(skip, start) {
    const data = await JobSchema.find().skip(start).limit(skip);
    return data;
  }

  /**
   * count user data from Jobs table.
   * @returns {object} exist user.
   */
  static async countJobs() {
    const data = await JobSchema.countDocuments();
    return data;
  }
}

export default JobHelper;
