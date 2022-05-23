import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Carro} from "./carro.model";
import {CarrosService} from "./carros.service";

@Controller('carros')
export class CarrosController {

    constructor(private carrosService: CarrosService) {

    }

    @Get()
    obterTodos(): Carro[] {
        return this.carrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Carro {
        return this.carrosService.obterUm(params.id);
    }

    @Post()
    adicionar(@Body() carro: Carro) {
        this.carrosService.criar(carro);
    }

    @Put()
    alterar(@Body() carro: Carro) {
        return this.carrosService.alterar(carro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.carrosService.deletar(params.id);
    }

}