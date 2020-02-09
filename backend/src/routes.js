import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import FileController from './app/controllers/FileController';
import OrderController from './app/controllers/OrderController';
import DeliveryStartController from './app/controllers/DeliveryStartController';
import DeliveryEndController from './app/controllers/DeliveryEndController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// entregador visualiza suas entregas abertas e não canceladas
routes.get('/deliverymen/:id/deliveries', DeliverymanController.index);
// entregador visualiza suas entregas finalizadas
routes.get('/deliverymen/:id/deliveried', DeliverymanController.index);
// entregador inicia entrega
routes.post('/orders/:id/startdelivery', DeliveryStartController.store);
// entregador finaliza entrega
routes.post('/orders/:id/enddelivery', DeliveryEndController.store);
// visualizar problemas na entrega de uma encomenda
routes.get('/orders/:id/problems', OrderController.update);
// adicionar problemas na entrega de uma encomenda
routes.post('/orders/:id/problems', OrderController.update);
// cancelar encomenda com base em um problema
routes.delete('/problem/:id/canceldelivery', OrderController.update);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.get('/deliverymen', DeliverymanController.index);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

routes.post('/orders', OrderController.store);
routes.put('/orders/:id', OrderController.update);
routes.get('/orders', OrderController.index);
routes.delete('/orders/:id', OrderController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
