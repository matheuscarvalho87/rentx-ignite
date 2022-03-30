import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const rentalRoutes = Router();

const createRentallController = new CreateRentalController();


rentalRoutes.post('/',ensureAuthenticated, createRentallController.handle);

export { rentalRoutes };
