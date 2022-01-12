import { AppError } from '@shared/errors/AppError';
import { CategoriesRespositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRespositoryInMemory;


describe("Create category",()=>{
  beforeEach(()=>{
    categoriesRepositoryInMemory = new CategoriesRespositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  })

  it("Should be able to create a new category",async ()=>{
    const category ={
      name: "Category 1",
      description: "Description 1"
    }

    await createCategoryUseCase.execute({
      name:category.name,
      description: category.description
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name)

    expect(categoryCreated).toHaveProperty("id");
  }),

  it("Should not be able to create a new category if name already exists",async ()=>{
      expect(async () =>{
        const category ={
          name: "Category 1",
          description: "Description 1"
        }
  
        await createCategoryUseCase.execute({
          name:category.name,
          description: category.description
        });
  
        await createCategoryUseCase.execute({
          name:category.name,
          description: category.description
        });
      }).rejects.toBeInstanceOf(AppError).catch(err=>{throw err})
    
  })


})
