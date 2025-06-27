import { Module } from '@nestjs/common';
import { CasaProviders } from './casa.repository';
import { CasaController } from './casa.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CasaService } from './casa.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CasaController],
  providers: [...CasaProviders, CasaService],
  exports: [...CasaProviders, CasaService],
})
export class CasaModule {}
// This module imports the DatabaseModule, which provides the database connection.
// It also defines the CasaController and CasaService, and registers the CasaProviders.
