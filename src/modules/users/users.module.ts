import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserRepository } from '@/repositories/user/user.repository';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [],
})
export class UsersModule {}
