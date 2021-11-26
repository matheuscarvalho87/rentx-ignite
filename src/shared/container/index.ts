import {container} from 'tsyringe'
import {ICategoryRepository} from '../../modules/cars/repositories/ICategoriesRepository'
import {CategoriesRepository} from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'
// ICategoryRepository
container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

// ICategoryRepository
container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
)