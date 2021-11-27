import {Request, Response} from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase';

class CreateUserController {

  async handle(request:Request,response: Response): Promise<Response>{
    try {
      const { name, username,email,driver_license,password  } = request.body;
      const createUserUseCase = container.resolve(CreateUserUseCase)

      await createUserUseCase.execute({name, username,email,driver_license,password})

      return response.status(201).send();
    } catch (error) {
      return response.status(404).json({error:error.message})
    }

  }
}
export { CreateUserController };