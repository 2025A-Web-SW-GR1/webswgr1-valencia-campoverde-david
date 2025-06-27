import { DataSource } from 'typeorm';
import { Casa } from './casa.entity';

export const CasaProviders = [
  {
    provide: 'CASA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Casa),
    inject: ['DATA_SOURCE'],
  },
];
// This code defines a provider for the Casa repository using TypeORM.
// It uses the `useFactory` method to create a repository for the `Casa` entity
