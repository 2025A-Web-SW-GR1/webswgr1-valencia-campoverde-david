import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { CasaEditarDto } from './dto/casa-editar.dto';
import { CrearEditarBaseDTO } from './dto/crear-editar.base.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { plainToInstance } from 'class-transformer';
import { CasaRespuestaDto } from './dto/casas-retorno.dto';

@Controller('api/casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}
  @Get()
  async obtener(@Query() parametrosConsulta: BuscarDto) {
    const objetoBusqueda: FindManyOptions<Casa> = {};

    if (parametrosConsulta.nombre) {
      objetoBusqueda.where = {
        nombre: Like(`%${parametrosConsulta.nombre}%`),
      };
    }

    const casas = await this.casaService.obtenerTodos(objetoBusqueda);

    return plainToInstance(CasaRespuestaDto, casas, {
      excludeExtraneousValues: true,
    });
  }

  @Post()
  crearUno(@Body() parametrosCuerpo: CrearEditarBaseDTO) {
    this.casaService.crearUno(
      parametrosCuerpo.nombre,
      parametrosCuerpo.valor,
      parametrosCuerpo.imagenURL,
      parametrosCuerpo.username,
      parametrosCuerpo.password,
    );
  }

  @Post('uploadFile/:id')
  @UseInterceptors(FileInterceptor('archivoASubir', { dest: './uploads' }))
  async subirArchivo(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
  ) {
    // No mas de 5 megas
    if (file.size <= 1000 * 1024 * 5) {
      // Guardar archivo en la carpeta upload
      // En ambientes productivos se puede subir a una nube como el S3 de amazon
      // En nuestro caso para poder descargar el archivo necesitamos
      // 1) Nombre archivo original
      // 2) Tipo archivo
      // 3) Nombre archivo guardado
      // Lo guardamos en la base de datos en el registro de la casa
      await this.casaService.actualizarArchivoPorId(
        {
          fileContentType: file.mimetype,
          fileID: file.filename,
          filename: file.originalname,
        },
        +id,
      );
      return {
        mensaje: 'Archivo guardado correctamente',
        ...file,
      };
    } else {
      throw new BadRequestException('Archivo no valido');
    }
  }

  @Get('streamDownloadFile/:id')
  async stream(@Res() response: any, @Param('id') id: string) {
    // Obtenemos el nombre original, guardado y el tipo de archivo para poder descargar
    const respuestaCasa = await this.casaService.obtenerUnoPorId(+id);
    const file = createReadStream(
      join(process.cwd(), './uploads/' + respuestaCasa?.fileID),
    );
    // Tipo de contenido
    response.contentType(respuestaCasa?.fileContentType);
    // Nombre de archivo
    response.setHeader(
      'Content-Disposition',
      `attachment; filename="${respuestaCasa?.filename}"`,
    );
    // En este caso estamos descargando como un STREAM de datos,
    // Hay otras formas para descargar como un buffer de datos tambien.
    file.pipe(response as any);
  }
}
// This controller handles requests to the /api/casa endpoint and uses the CasaService to fetch all houses.
// The @Get() decorator indicates that this method will respond to GET requests.
