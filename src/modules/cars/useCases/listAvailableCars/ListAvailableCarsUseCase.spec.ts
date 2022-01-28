import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory'
import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase'

let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
  })
  it("should be able to list all available cars", async () => {

    const car = await carsRepositoryInMemory.create({

      "name": "Car1",
      "description": "Car Description",
      "daily_rate": 110,
      "license_plate": "DEF-12334",
      "fine_amount": 40,
      "brand": "Car_brand",
      "category_id": "category_id"

    })

    const cars = await listAvailableCarsUseCase.execute({})
    
    
    expect(cars).toEqual([car])
  })

  it("shoul be able to list all available cars by name",async () =>{
    const car = await carsRepositoryInMemory.create({

      "name": "Car2",
      "description": "Car Description",
      "daily_rate": 110,
      "license_plate": "DEF-12334",
      "fine_amount": 40,
      "brand": "Car_brand",
      "category_id": "category_id"

    })

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car2"
    })
    
    
    expect(cars).toEqual([car])
  })

  it("shoul be able to list all available cars by brand",async () =>{
    const car = await carsRepositoryInMemory.create({

      "name": "Car3",
      "description": "Car Description3",
      "daily_rate": 124,
      "license_plate": "DEF-123",
      "fine_amount": 400,
      "brand": "Car_brand3",
      "category_id": "category_id"

    })

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand3"
    })
    
    
    expect(cars).toEqual([car])
  })

  it("shoul be able to list all available cars by category",async () =>{
    const car = await carsRepositoryInMemory.create({

      "name": "Car4",
      "description": "Car Description4",
      "daily_rate": 12324,
      "license_plate": "DEF-1233",
      "fine_amount": 123,
      "brand": "Car_brand4",
      "category_id": "category_id4"

    })

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id4"
    })
    
    
    expect(cars).toEqual([car])
  })
})