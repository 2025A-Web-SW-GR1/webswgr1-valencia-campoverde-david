import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Casa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nombre: string;

  @Column()
  valor: number;

  @Column()
  imagenURL: string;

  @Column({ nullable: true })
  fileContentType?: string;

  @Column({ nullable: true })
  filename?: string;

  @Column({ nullable: true })
  fileID?: string;

  // Usado para los datos de sesion

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;
}
// Este código define una entidad Casa que representa una casa en la base de datos.
// Utiliza TypeORM para mapear la entidad a una tabla en la base de datos.
