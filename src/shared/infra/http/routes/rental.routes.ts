import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const rentalRoutes = Router();

const createRentallController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();


rentalRoutes.post('/',ensureAuthenticated, createRentallController.handle);
rentalRoutes.post('/devolution/:id',ensureAuthenticated, devolutionRentalController.handle);

export { rentalRoutes };
