import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Headers,
  Body,
  HttpCode,
  NotFoundException,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id') // /ejemplo/1?hola=mundo
  @HttpCode(200) // Cambia el código de estado a 200 OK
  ejemplo(
    @Param('id') id, //Parametro de Ruta
    @Query('hola') hola, //Parametro de Consulta
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') body, // Cuerpo de la solicitud
    @Body('numero') numero, // Otro campo del cuerpo
  ): string {
    return id + hola + ' Funcionando' + escuela + body + numero;
  }

  @Get('/casa')
  @HttpCode(200)
  casa(@Query('idCasa') idCasa: string): { id: number; nombre: string }[] {
    type Propiedad = {
      id: number;
      nombre: string;
    };

    let propiedades: Propiedad[] = [];

    if (!idCasa) {
      propiedades = [
        { id: 1, nombre: 'Casa 1' },
        { id: 2, nombre: 'Casa 2' },
      ];
    }
    if (idCasa === '1') {
      propiedades = [{ id: 1, nombre: 'Casa 1' }];
    } else if (idCasa === '2') {
      propiedades = [{ id: 2, nombre: 'Casa 2' }];
    } else if (idCasa === '3') {
      throw new NotFoundException('Casa no encontrada');
    } else if (idCasa) {
      propiedades = [{ id: 0, nombre: 'Casa Fantasma' }];
    }

    return propiedades;
  }
}
