import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

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
}
