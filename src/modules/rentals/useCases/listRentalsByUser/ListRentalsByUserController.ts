import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListRentalsByUserUseCase } from './listRentalsByUserUseCase';


class ListRentalsByUserController{
  async handle(request:Request, response:Response){
    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUseCase
    )

    await listRentalsByUserUseCase.execute()
  }
}
export { ListRentalsByUserController }
