import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { LoggerService } from '../logger/logger.service';
import { ENVIRONMENT } from './config/environment.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    private readonly logger: LoggerService = new LoggerService(AppModule.name);
    constructor() {
        this.logger.log(typeOrmConfig);
        this.logger.log(ENVIRONMENT, `Environment`);
    }
 }
