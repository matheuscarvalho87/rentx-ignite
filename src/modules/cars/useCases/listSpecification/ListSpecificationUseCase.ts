import { inject, injectable } from 'tsyringe';
import { Specification } from '../../infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest{
  name:string;
  description:string;
}
@injectable()
class ListSpecificationUseCase {

  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository){
    this.specificationsRepository = specificationsRepository;
  }

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase}
