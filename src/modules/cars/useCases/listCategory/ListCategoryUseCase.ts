import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { Specification } from '../../entities/Specification';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

interface IRequest{
  name:string;
  description:string;
}
@injectable()
class ListCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository)
    {}

  async execute(): Promise<Specification[] >{
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase}