import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryStartController from './app/controllers/DeliveryStartController';
import DeliveryEndController from './app/controllers/DeliveryEndController';
import DeliverymanDeliveryController from './app/controllers/DeliverymanDeliveryController';
import DeliverymanDeliveredController from './app/controllers/DeliverymanDeliveredController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';
import DeliveryCancelController from './app/controllers/DeliveryCancelController';
import DeliveryWithProblemController from './app/controllers/DeliveryWithProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

/*
  Routes without authentication
*/
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

/*
  Routes without authentication (used by deliveryman in mobile app)
*/
// Deliveryman view yours deliveries start and not cancelled
routes.get('/deliverymen/:id/deliveries', DeliverymanDeliveryController.index);
// Deliveryman view yours delivered
routes.get('/deliverymen/:id/delivered', DeliverymanDeliveredController.index);
// Deliveryman start the delivery
routes.post('/deliveries/:id/start', DeliveryStartController.store);
// Deliveryman end the delivery
routes.post('/deliveries/:id/end', DeliveryEndController.store);
// Deliveryman can add problem in some delivery
routes.post('/deliveries/:id/problems', DeliveryProblemController.store);
// Deliveryman can view the problems in some delivery
routes.get('/deliveries/:id/problems', DeliveryProblemController.index);

routes.get('/deliverymen/:id', DeliverymanController.show);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

/*
  Routes with authentication (used by administrators)
*/
routes.put('/users', UserController.update);
// View all deliveries with problems
routes.get('/deliveries/problems', DeliveryWithProblemController.index);
// Cancel the delivery with some problem
routes.post('/problem/:id/canceldelivery', DeliveryCancelController.store);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.get('/deliverymen', DeliverymanController.index);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:id', DeliveryController.show);
routes.delete('/deliveries/:id', DeliveryController.delete);

export default routes;
