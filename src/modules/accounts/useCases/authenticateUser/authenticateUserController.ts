import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';


class AuthenticateUserController {
    constructor() { }

    async handle(request:Request, response:Response):Promise<Response>{
      const { email, password } = request.body;

      const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

      const token = await authenticateUserUseCase.execute({password, email})

      return response.json(token)
    }
}

export { AuthenticateUserController };
