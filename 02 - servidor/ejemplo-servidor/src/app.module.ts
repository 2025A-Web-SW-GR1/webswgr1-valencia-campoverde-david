import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module'; // Importa el módulo de la base de datos
import { CasaModule } from './casa/casa.module';
import { AuthController } from './app.auth-controller'; // Importa el controlador de autenticación

@Module({
  imports: [
    DatabaseModule, // Importa el módulo de la base de datos
    CasaModule, // Importa el módulo de casas
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
