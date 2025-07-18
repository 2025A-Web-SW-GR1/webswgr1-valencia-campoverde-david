import { Inject, Injectable } from '@nestjs/common';
import { Casa } from './casa.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CasaService {
  constructor(
    @Inject('CASA_REPOSITORY')
    private casaRepository: Repository<Casa>,
  ) {}
  obtenerTodos(options?: FindManyOptions<Casa> | undefined) {
    return this.casaRepository.find(options);
  }
  crearUno(nombre: string, valor: number, imagenURL: string) {
    const nuevaInstancia = this.casaRepository.create();
    // Create a new instance of Casa using the repository's create method.
    nuevaInstancia.nombre = nombre;
    nuevaInstancia.valor = valor;
    nuevaInstancia.imagenURL = imagenURL;
    // Set the properties of the new instance.
    // The properties are set using the parameters passed to the method.
    return this.casaRepository.save(nuevaInstancia);
  }
}
// This service uses the CasaRepository to interact with the database.
// It injects the repository using the 'CASA_REPOSITORY' token.
