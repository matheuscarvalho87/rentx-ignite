import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { ICarsImageRepository } from '@modules/cars/repositories/ICarsImageRepository';
import { getRepository, Repository } from 'typeorm';
import { Car } from '../entities/Car';



class CarsImageRepository implements ICarsImageRepository {
  private repository: Repository<Car>;

  constructor(){
    this.repository = getRepository(Car)
  }
  

}

export { CarsImageRepository };
