import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const JobSchema = new Schema({
  shift: { type: String, required: [true, 'shift is required'] },
  workingHours: { type: String, required: [true, 'workingHours is required'] },
  position: { type: String, required: [true, 'position is required'] },
  salary: { type: String, required: [true, 'salary is required'] },
  company: { type: String, required: [true, 'company is required'] },
  review: { type: String, required: [true, 'review is required'] },
  street: { type: String, required: [true, 'street is required'] },
  address: { type: String, required: [true, 'address is required'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Jobs', JobSchema);
