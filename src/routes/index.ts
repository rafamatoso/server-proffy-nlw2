import express from 'express';
import ClassesController from '../controllers/ClassesController';
import ConnectionController from '../controllers/ConnectionsController';

const routes = express.Router();

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.create);

routes.get('/connections', ConnectionController.index);
routes.post('/connections', ConnectionController.create);

export default routes;
