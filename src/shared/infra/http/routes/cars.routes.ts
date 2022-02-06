import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UploadCarImagesController } from '@modules/cars/useCases/uploadImage/UploadCarImagesController';
import multer from 'multer';
import uploadConfig from '@config/upload';

const carsRoutes = Router()

let createCarController = new CreateCarController()
let listAvailableCarsController = new ListAvailableCarsController()
let createCarSpecificationController = new CreateCarSpecificationController()
let uploadCarImage = new UploadCarImagesController()

const uploadCarsImages = multer(uploadConfig.upload('./tmp/cars'))

carsRoutes.post('/',
                ensureAuthenticated,
                ensureAdmin,
                createCarController.handle)

carsRoutes.get('/available', listAvailableCarsController.handle)

carsRoutes.post("/specifications/:id",
                ensureAuthenticated,
                ensureAdmin,
                createCarSpecificationController.handle)

carsRoutes.post("/images/:id",
                ensureAuthenticated,
                ensureAdmin,
                uploadCarsImages.array('images'),
                uploadCarImage.handle)


export { carsRoutes }
