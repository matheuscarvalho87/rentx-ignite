import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '@modules/cars/useCases/listSpecification/ListSpecificationController';



const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

const listSpecificationController = new ListSpecificationController()

specificationsRoutes.use(ensureAuthenticated)

specificationsRoutes.get('/', listSpecificationController.handle );

specificationsRoutes.post('/', createSpecificationController.handle)

export { specificationsRoutes };
