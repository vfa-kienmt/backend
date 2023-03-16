import { Module } from '@nestjs/common';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule as Winston,
} from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    Winston.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(process.env.APP_NAME, {
              colors: true,
              prettyPrint: true,
            }),
          ),
        }),
      ],
    }),
  ],
  providers: [],
})
export class LoggerModule {}
