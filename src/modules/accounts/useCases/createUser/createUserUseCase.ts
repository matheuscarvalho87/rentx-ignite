import {inject, injectable} from 'tsyringe'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
    ){}


  async execute({name, username,email,driver_license,password }:ICreateUserDTO): Promise<void> {
    // const categoryAlredyExists = await this.userRepository.findByName(name);

    // if(categoryAlredyExists){
    //   throw new Error('Category already exists');
    // }

    await this.userRepository.create({
      name, username,email,driver_license,password 
    })
  }
}

export { CreateUserUseCase}
