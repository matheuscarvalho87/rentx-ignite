import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';
import dayjs from 'dayjs';
import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayJsProvider : DayjsDateProvider;


describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, 'day').toDate();
  beforeEach(()=>{
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayJsProvider= new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory,dayJsProvider);
  })

  it(" should be able to create new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "user-id",
      car_id: "car-id",
      expected_return_date: dayAdd24Hours
    })

    expect(rental).toHaveProperty('id');
    expect(rental).toHaveProperty('start_date');
  })

  it(" should not be able to create new rentalif there is another open to the same user", async () => {
  expect(async () => {
    await createRentalUseCase.execute({
      user_id: "user-id",
      car_id: "car-id",
      expected_return_date: dayAdd24Hours
    })

    await createRentalUseCase.execute({
      user_id: "user-id",
      car_id: "car-id",
      expected_return_date: dayAdd24Hours
    })
  }).rejects.toBeInstanceOf(AppError);

  })

  it(" should not be able to create new rentalif there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "user-id123",
        car_id: "car-id",
        expected_return_date: dayAdd24Hours
      })

      await createRentalUseCase.execute({
        user_id: "user-id321",
        car_id: "car-id",
        expected_return_date: dayAdd24Hours
      })
    }).rejects.toBeInstanceOf(AppError);

    })
    it(" should not be able to create new rental with invalid return time", async () => {
      expect(async () => {
        await createRentalUseCase.execute({
          user_id: "user-id123",
          car_id: "car-id",
          expected_return_date: dayjs().toDate()
        })
      }).rejects.toBeInstanceOf(AppError);

      })
})
