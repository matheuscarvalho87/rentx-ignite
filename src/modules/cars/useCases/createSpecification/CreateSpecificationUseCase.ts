import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest{
  name:string;
  description:string;
}
@injectable()
class CreateSpecificationUseCase {

  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationsRepository){
    this.specificationRepository = specificationRepository;
  }


  async execute({name,description}:IRequest): Promise<void> {
    const categoryAlredyExists = await this.specificationRepository.findByName(name);

    if(categoryAlredyExists){
      throw new AppError('Specification already exists');
    }

    await this.specificationRepository.create({
      name,
      description
    })
  }
}

export { CreateSpecificationUseCase }
