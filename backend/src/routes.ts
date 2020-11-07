import { Router } from 'express';
import multer from 'multer';
import authMiddleware from './middlewares/authMiddleware';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.post('/orphanages/users', UserController.create);
routes.post('/orphanages/auth', AuthController.authenticate);
routes.get('/dashboard', authMiddleware, UserController.index);

export default routes;