import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '@/modules/users/dto/createUser.dto';

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

  @Post('users')
  @HttpCode(201)
  public create(@Body() params: CreateUserDTO) {
    return params;
  }
}
