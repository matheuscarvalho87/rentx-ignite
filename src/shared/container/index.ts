import {container} from 'tsyringe'
import {ICategoryRepository} from '@modules/cars/repositories/ICategoriesRepository'
import {CategoriesRepository} from '@modules/cars/infra/typeorm/repositories/CategoriesRepository'
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository'
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository'
import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository'
import { IUsersRepository } from '@modules/accounts/repositories/IUserRepository'
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


container.registerSingleton<IUsersRepository>(
  "UserRepository",
  UserRepository
)
