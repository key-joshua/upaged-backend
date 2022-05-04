import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';

import allRoutes from './routes';
import apiDocumentation from '../swagger.json';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => { console.log(`Error at mongo: ${err}`); });
mongoose.connection.on('connected', () => { console.log('Connected to mongoDB'); });

app.use('/api', allRoutes);
app.use(`/api/documentation`, swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.get('**', (req, res) => res.status(200).json({ status: 200, message: `Welcome To uPaged Backend` }));

app.listen(process.env.PORT, () => { console.log('Server Started on', process.env.PORT); });

export default app;
