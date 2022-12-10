import express from 'express';
import imagesRouter from './api/imageProcess';

const routes = express.Router();

// here will be all the main routes for this project

routes.use(imagesRouter);
export default routes;
