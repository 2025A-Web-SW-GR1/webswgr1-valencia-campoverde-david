import { Controller, Get } from '@nestjs/common';
import { CasaService } from './casa.service';

@Controller('api/casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}
  @Get()
  obtener() {
    return this.casaService.obtenerTodos();
  }
}
// This controller handles requests to the /api/casa endpoint and uses the CasaService to fetch all houses.
// The @Get() decorator indicates that this method will respond to GET requests.
