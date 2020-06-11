import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);


/**
 * Nomes dos metodos utilidados para as controllers
 * index: list
 * show: exibir um únoco valor da lista
 * create: criar
 * update: atualizar
 * delete: deleta DELETE FROM (tabela)
 */
export default routes;