import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders], // que servicios uso
  exports: [...databaseProviders], // que servicios exporto
})
export class DatabaseModule {}
// Este módulo se encarga de la configuración de la base de datos
// y de exportar los proveedores necesarios para que otros módulos puedan usarlos.
