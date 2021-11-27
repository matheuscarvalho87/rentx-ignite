import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import {  IUsersRepository } from '../IUserRepository';
import { User } from '../../entities/User';

class UserRepository implements IUsersRepository {
  private repository: Repository<User>
  
  constructor(){
    this.repository = getRepository(User);
  }

  async create({name,username,email,driver_license,password}: ICreateUserDTO): Promise<void> {
    
    const user = this.repository.create({
      name,username,email,driver_license,password
    });

    await this.repository.save(user);
  }

  
}

export { UserRepository };