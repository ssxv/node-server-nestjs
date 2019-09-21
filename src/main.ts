import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app/app.module';
import * as config from 'config';
import { LoggerService } from './logger/logger.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new LoggerService(`Main`),
    });
    const serverConfig = config.get('server');
    const PORT = process.env.PORT || serverConfig.port;
    await app.listen(PORT);
}

bootstrap();
