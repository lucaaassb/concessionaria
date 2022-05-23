export class Carro{
    id: number;
    modelo: string;
    ano: number;
    preco: number;

    constructor(modelo: string, ano: number, preco: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
}