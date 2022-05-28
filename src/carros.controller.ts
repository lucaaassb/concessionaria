import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Carro } from './carro.model';
import { CarrosService } from './carros.service';

@Controller('carros')
export class CarrosController {
  constructor(private carrosService: CarrosService) {}

  @Get()
  async obterTodos(): Promise<Carro[]> {
    return this.carrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Carro> {
    return this.carrosService.obterUm(params.id);
  }

  @Post()
  async adicionar(@Body() carro: Carro) {
    this.carrosService.criar(carro);
  }

  @Put()
  async alterar(@Body() carro: Carro): Promise<[number, Carro[]]> {
    return this.carrosService.alterar(carro);
  }

  @Delete(':id')
  async apagar(@Param() params) {
    this.carrosService.deletar(params.id);
  }
}
