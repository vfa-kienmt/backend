import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '@/modules/users/dto/createUser.dto';
import { UserEntity } from '@/entities/user.entity';
import { ApiKeyGuard } from '@/shared/guards/apiKey.guard';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getUser')
  public getUsers() {
    return this.usersService.findUser();
  }

  @Get('listUser')
  public listUser() {
    return [];
  }

  @Post('create-user')
  @UseGuards(ApiKeyGuard)
  @HttpCode(201)
  public async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<UserEntity> {
    return await this.usersService.createUser(createUserDTO);
  }
}
