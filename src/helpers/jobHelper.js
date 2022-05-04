import JobSchema from '../models/jobSchema';

/**
* This class contains all methods (functions) required to handle
* Select all jobs function.
*/
class JobHelper {
  /**
   * findjobs from Jobs table.
   * @returns {object} of all jobs.
   */
  static async findJobs() {
    const data = await JobSchema.find();
    return data;
  }
}

export default JobHelper;
