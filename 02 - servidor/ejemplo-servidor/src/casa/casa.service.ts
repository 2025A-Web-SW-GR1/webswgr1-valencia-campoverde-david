import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CasaService {
  constructor(
    @Inject('CASA_REPOSITORY')
    private casaRepository: Repository<Casa>,
  ) {}
  obtenerTodos() {
    return this.casaRepository.find();
  }
}
// This service uses the CasaRepository to interact with the database.
// It injects the repository using the 'CASA_REPOSITORY' token.
