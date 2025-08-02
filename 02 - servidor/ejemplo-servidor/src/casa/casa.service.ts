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
  obtenerUnoPorId(id: number) {
    return this.casaRepository.findOneBy({ id });
  }
  crearUno(
    nombre: string,
    valor: number,
    imagenURL: string,
    username: string,
    password: string,
  ) {
    const nuevaInstancia = this.casaRepository.create();
    // Create a new instance of Casa using the repository's create method.
    nuevaInstancia.nombre = nombre;
    nuevaInstancia.valor = valor;
    nuevaInstancia.imagenURL = imagenURL;
    nuevaInstancia.username = username;
    nuevaInstancia.password = password;
    // Set the properties of the new instance.
    // The properties are set using the parameters passed to the method.
    return this.casaRepository.save(nuevaInstancia);
  }

  buscarUnoPorUsername(username: string) {
    return this.casaRepository.findOneByOrFail({ username });
  }

  async actualizarArchivoPorId(
    valoresAActualizar: {
      fileContentType: string;
      filename: string;
      fileID: string;
    },
    id: number,
  ) {
    const recordExist = await this.casaRepository.findOneByOrFail({ id });
    let registroActualizar = this.casaRepository.create();
    registroActualizar = {
      ...registroActualizar,
      ...valoresAActualizar,
    };
    registroActualizar.id = recordExist.id;
    return this.casaRepository.save(registroActualizar);
  }
}
// This service uses the CasaRepository to interact with the database.
// It injects the repository using the 'CASA_REPOSITORY' token.
