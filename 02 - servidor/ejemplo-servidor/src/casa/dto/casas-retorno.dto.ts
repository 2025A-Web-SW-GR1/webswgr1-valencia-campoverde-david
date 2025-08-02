import { Expose } from 'class-transformer';

export class CasaRespuestaDto {
  @Expose()
  id: number;

  @Expose()
  nombre: string;

  @Expose()
  valor: number;

  @Expose()
  imagenURL: string;

  @Expose()
  fileContentType?: string;

  @Expose()
  filename?: string;

  @Expose()
  fileID?: string;

  @Expose()
  username: string;
  // cualquier otro campo que sí quieras retornar
}
