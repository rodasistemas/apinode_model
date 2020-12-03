import { Router } from "express";
import path from "path";
import cors from 'cors';

import indexController from '../app/controllers/index.js';
const routes = new Router();

routes.use(cors());

routes.get('/', indexController.index);

export default routes;