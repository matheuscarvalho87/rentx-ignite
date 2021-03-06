import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UserRepository';

interface IPayload{
  iat:number;
  exp:number;
  sub:string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing',401);
  }

  const [, token] = authHeader.split(' ');



  try {
    const {sub:user_id} =verify(token, '7962c484943b4acc21d24dac9f84a09a') as IPayload

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id)
    if(!user){
      throw new AppError('User not found',401)
    }

    request.user = {
      id: user_id
    };
    next()
  } catch (err) {
    throw new AppError('Invalid JWT token',401);
  }
}
