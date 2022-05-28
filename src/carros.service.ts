import { Carro } from './carro.model';
// @ts-ignore
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// @ts-ignore
@Injectable
export class CarrosService {
  constructor(@InjectModel(Carro) private readonly carroModel: typeof Carro) {}

  async obterTodos(): Promise<Carro[]> {
    return this.carroModel.findAll();
  }

  async obterUm(id: number): Promise<Carro> {
    return this.carroModel.findByPk(id);
  }

  async criar(carro: Carro) {
    this.carroModel.create(carro);
  }

  async alterar(carro: Carro): Promise<[number, Carro[]]> {
    return this.carroModel.update(carro, {
      where: {
        id: carro.id,
      },
    });
  }

  async deletar(id: number) {
    const carro: Carro = await this.obterUm(id);
    carro.destroy();
  }
}
