import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Carro } from './carro.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
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
