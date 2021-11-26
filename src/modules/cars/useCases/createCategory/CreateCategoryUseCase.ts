import {inject, injectable} from 'tsyringe'
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
  name:string;
  description:string;
}

@injectable()
class CreateCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
    ){
    this.categoriesRepository = categoriesRepository;
  }


  async execute({name,description}:IRequest): Promise<void> {
    const categoryAlredyExists = await this.categoriesRepository.findByName(name);

    if(categoryAlredyExists){
      throw new Error('Category already exists');
    }

    await this.categoriesRepository.create({
      name,
      description
    })
  }
}

export { CreateCategoryUseCase}
