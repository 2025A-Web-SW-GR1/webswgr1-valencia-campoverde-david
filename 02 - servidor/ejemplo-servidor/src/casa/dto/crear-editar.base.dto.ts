import { IsInt, IsStrongPassword, IsUrl, Length, Min } from 'class-validator';

export class CrearEditarBaseDTO {
  @Length(3, 500)
  nombre: string;

  @IsInt()
  @Min(0)
  valor: number;

  @IsUrl()
  imagenURL: string;

  @Length(3, 500)
  username: string;

  @Length(3, 100)
  password: string;
}
