import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Carro } from './carro.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'concessionaria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Carro]),
  ],
  controllers: [AppController, CarrosController],
  providers: [AppService, CarrosService],
})
export class AppModule {}
