import 'dotenv/config';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '@/shared/interceptor/logging.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import mysql from '@/config/database/mysql';
import { UsersModule } from '@/modules/users/users.module';
import { LoggerModule } from '@/config/logger/logger.module';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';

@Module({
  imports: [TypeOrmModule.forRoot(mysql), LoggerModule, UsersModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
