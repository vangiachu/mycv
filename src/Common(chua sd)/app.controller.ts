/// src/app.controller.ts

import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateExampleDto } from './create-example.dto';
import { AuthGuard } from './auth.guard';
import { LoggingInterceptor } from './logging.interceptor';
import { ValidationPipe } from './validation.pipe';
import { RequestService } from './request.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly requestService: RequestService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UsePipes(ValidationPipe)
  postExample(@Body() body: CreateExampleDto) {
    this.appService.postExample();
  }
 }