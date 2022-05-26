import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Carro extends Model<Carro> {
  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  modelo: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ano: number;

  @Column({
    type: DataType.DECIMAL(10, 5),
    allowNull: false,
  })
  preco: number;
}
