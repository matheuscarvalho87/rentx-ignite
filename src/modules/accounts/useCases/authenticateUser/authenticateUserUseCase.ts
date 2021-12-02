import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUserRepository';
import {  sign } from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { AppError } from '../../../../errors/AppError';

interface IRequest{
    email: string;
    password: string;
}
interface IResponse{
  user:{
    name:string;
    email:string;
  },
  token:string;
}
@injectable()
class AuthenticateUserUseCase {

  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ){}

  async execute({email, password}: IRequest): Promise<IResponse> {
    //Usuario existe
    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError('Email or password invalid!');
    }

    //Senha esta correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError('Email or password invalid!');
    }

    //Gerar jwt
    const token = sign({},"7962c484943b4acc21d24dac9f84a09a",{
      subject: user.id,
      expiresIn: "1d"
    })

    const tokenReturn: IResponse = {
      token,
      user:{
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn

  }
}
export { AuthenticateUserUseCase };
