import { IsOptional, IsUrl, Length, Min } from 'class-validator';
import { CrearEditarBaseDTO } from './crear-editar.base.dto';

export class CasaEditarDto extends CrearEditarBaseDTO {
  @IsOptional()
  declare nombre: string;

  @IsOptional()
  declare valor: number;

  @IsOptional()
  declare imagenUrl: string;
}
