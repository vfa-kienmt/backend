/**
 * HttpError.filter.ts
 * sos_backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/9/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpErrorFilter.name);

  /**
   * Override for custom error handling
   *
   * @param exception
   * @param host
   */
  catch(exception: HttpException, host: ArgumentsHost): void {
    const now = Date.now();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      errorCode: this.formatErrorCode(),
    };

    const log = {
      ApiName: ctx.getRequest().url,
      Request: JSON.stringify(ctx.getRequest().headers),
      Response: errorResponse,
      Elapsed: `${Date.now() - now} ms`,
      StatusCode: ctx.getResponse().statusCode,
    };
    this.writeResponse(log);
    response.status(status).json(errorResponse);
  }

  /**
   * Get error code from exception
   *
   * @protected
   */
  protected formatErrorCode(): string {
    return 'Error';
  }

  /**
   * Write log for response error
   *
   * @param log
   * @private
   */
  private writeResponse(log) {
    this.logger.log(JSON.stringify(log));
  }
}
