import {Carro} from "./carro.model";
import {Injectable} from "@nestjs/common";

@Injectable
export class CarrosService {
    carros: Carro[] = [
        new Carro("FIAT TORO", 2020, 89000),
        new Carro("ARGO", 2018, 75000),
        new Carro("ONYX", 2019, 70000),
    ];

    obterTodos(): Carro[] {
        return this.carros;
    }

    obterUm(id: number): Carro {
        return this.carros[0];
    }

    criar(carro: Carro) {
        this.carros.push(carro);
    }

    alterar(carro: Carro): Carro {
        return carro;
    }

    deletar(id: number) {
        this.carros.pop();
    }
}