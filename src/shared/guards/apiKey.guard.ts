import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const key = req.headers['api-x-key'];
    if (key && key === process.env.APIKEY) {
      return true;
    }
    throw new BadRequestException('Invalid api key.');
  }
}
