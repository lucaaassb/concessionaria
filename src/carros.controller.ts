import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";

@Controller('carros')
export class CarrosController {

    @Get()
    obterTodos(): string {
        return 'Lista de todos os Carros';
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return 'Retorna os dados do Carro ${params.id}';
    }

    @Post()
    adicionar(@Body() carro): string {
        console.log(carro);
        return 'Carro adicionado com sucesso!';
    }

    @Put()
    alterar(@Body() carro): string {
        console.log(carro);
        return 'Carro atualizado com sucesso!';
    }

    @Delete(':id')
    apagar(@Param() params): string {
        return 'Apaga o carro ${params.id}';
    }

}