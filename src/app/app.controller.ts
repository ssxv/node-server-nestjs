import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { LoggerService } from '../logger/logger.service';

@Controller()
@UseGuards(AuthGuard)
export class AppController {

    private readonly logger: LoggerService = new LoggerService(AppController.name);

    constructor(
        private readonly appService: AppService,
    ) { }

    @Get()
    getAppName(): string {
        this.logger.log(`requested app name`);
        return this.appService.getAppName();
    }
}
