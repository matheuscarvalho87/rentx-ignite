import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController';
import { ensureAdmin } from '../middlewares/ensureAdmin';



const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

const listSpecificationController = new ListSpecificationController()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.get('/',ensureAuthenticated,ensureAdmin,listSpecificationController.handle );

specificationsRoutes.post('/',ensureAuthenticated,ensureAdmin,createSpecificationController.handle)

export { specificationsRoutes };
