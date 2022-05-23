import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CarrosController} from "./carros.controller";
import {CarrosService} from "./carros.service";

@Module({
    imports: [],
    controllers: [AppController, CarrosController],
    providers: [AppService, CarrosService],
})
export class AppModule {
}
