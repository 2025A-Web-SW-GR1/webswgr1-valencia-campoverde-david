import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { CrearEditarBaseDTO } from './dto/crear-editar.base.dto';

@Controller('api/casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}
  @Get()
  obtener(@Query() parametrosConsulta: BuscarDto) {
    const objetoBusqueda: FindManyOptions<Casa> = {};
    if (parametrosConsulta.nombre) {
      objetoBusqueda.where = {
        nombre: Like('%' + parametrosConsulta.nombre + '%'),
      };
    }
    return this.casaService.obtenerTodos(objetoBusqueda);
  }
  @Post()
  crearUno(@Body() parametrosCuerpo: CrearEditarBaseDTO) {
    this.casaService.crearUno(
      parametrosCuerpo.nombre,
      parametrosCuerpo.valor,
      parametrosCuerpo.imagenURL,
    );
  }
}
// This controller handles requests to the /api/casa endpoint and uses the CasaService to fetch all houses.
// The @Get() decorator indicates that this method will respond to GET requests.
