import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/Category';
import { Specification } from '../../infra/typeorm/entities/Specification';
import { ICategoryRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository)
    {}

  async execute(): Promise<Category[] >{
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase}
