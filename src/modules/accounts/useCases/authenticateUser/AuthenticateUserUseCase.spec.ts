import { AppError } from '@shared/errors/AppError'
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { CreateUserUseCase } from '../createUser/createUserUseCase'
import { AuthenticateUserUseCase } from './authenticateUserUseCase'


 let createUserUserCase : CreateUserUseCase
 let authenticateUserUseCase : AuthenticateUserUseCase
 let usersRepositoryInMemory: UsersRepositoryInMemory

describe("Authenticate User",()=>{
  beforeEach(()=>{
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    createUserUserCase = new CreateUserUseCase(usersRepositoryInMemory)
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
  })
  it("Should be able to authenticate an user", async ()=>{
    const user: ICreateUserDTO ={
      driver_license:"00123",
      email:"user@test.com",
      password:"123456",
      name:"User Test",
    }

    await createUserUserCase.execute(user)

    const result = await authenticateUserUseCase.execute({
      email:user.email,
      password:user.password
    })

    expect(result).toHaveProperty('token')
  });

  it("Should not be able to authenticate an nonexistent user", async ()=>{
    expect(async ()=>{
      await authenticateUserUseCase.execute({
        email:"false@email.com",
        password:"wrongPass"
      })
    }).rejects.toBeInstanceOf(AppError)
  })

  it("Should not be able to authenticate an user with wrong password", async ()=>{
    expect(async()=>{
      const user: ICreateUserDTO ={
        driver_license:"00123",
        email:"user@user.com",
        password:"123456",
        name:"User Test Error",
      }
      await createUserUserCase.execute(user)

      await authenticateUserUseCase.execute({
        email:user.email,
        password:"wrongPass"
      })

    }).rejects.toBeInstanceOf(AppError)
  })

  it("Should not be able to authenticate an user with wrong email", async ()=>{
    expect(async()=>{
      const user: ICreateUserDTO ={
        driver_license:"00123",
        email:"right@email.com",
        password:"123456",
        name:"User Test Error",
      }
      await createUserUserCase.execute(user)

      await authenticateUserUseCase.execute({
          email:"wrong@email.com",
          password:user.password
      })

    } ).rejects.toBeInstanceOf(AppError)
  })

})
