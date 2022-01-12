import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { CreateCarUseCase } from './CreateCarUseCase'


let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create car",()=>{
  beforeEach(()=>{
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
  })

  it("Should be able to create a new car",async()=>{
    const car = await createCarUseCase.execute({
      name:"Fusca",
      description: "Carro de luxo",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 10,
      brand:  "VW",
      category_id: "1"
    })

    expect(car).toHaveProperty("id")
  })

  it("Should not be able to create a car with the same license_plate",async()=>{
    expect(async()=>{
      await createCarUseCase.execute({
        name:"Fusca",
        description: "Carro de luxo",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 10,
        brand:  "VW",
        category_id: "1"
      })
    })

    expect(async()=>{
      await createCarUseCase.execute({
        name:"Fusca2",
        description: "Carro de luxo",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 10,
        brand:  "VW",
        category_id: "1"
      })
    }).rejects.toBeInstanceOf(AppError).catch(err=>{throw err})
  })
  it("Should be able to create a car with available true by default",async ()=>{
    const car = await createCarUseCase.execute({
      name:"Fusca Available",
      description: "Carro de luxo",
      daily_rate: 100,
      license_plate: "ABCD-1234",
      fine_amount: 10,
      brand:  "VW",
      category_id: "1"
    })

    expect(car.available).toBe(true)
  })
})
