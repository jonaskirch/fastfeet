import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
// import UserController from './app/controllers/UserController';
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
// routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// entregador visualiza suas entregas abertas e não canceladas
routes.get('/deliverymen/:id/deliveries', DeliverymanDeliveryController.index);
// entregador visualiza suas entregas finalizadas
routes.get('/deliverymen/:id/delivered', DeliverymanDeliveredController.index);
// entregador inicia entrega
routes.post('/deliveries/:id/start', DeliveryStartController.store);
// entregador finaliza entrega
routes.post('/deliveries/:id/end', DeliveryEndController.store);
// adicionar problemas na entrega de uma encomenda
routes.post('/deliveries/:id/problems', DeliveryProblemController.store);
// visualizar problemas na entrega de uma encomenda
routes.get('/deliveries/:id/problems', DeliveryProblemController.index);

routes.get('/deliverymen/:id', DeliverymanController.show);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

/*
  Routes with authentication
*/

// visualziar todas as entregas com problemas
routes.get('/deliveries/problems', DeliveryWithProblemController.index);

// cancelar encomenda com base em um problema
routes.post('/problem/:id/canceldelivery', DeliveryCancelController.store);

// routes.put('/users', UserController.update);

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
