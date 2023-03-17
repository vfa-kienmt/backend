import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '@/modules/users/dto/createUser.dto';
import { UserEntity } from '@/entities/user.entity';

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
  @HttpCode(201)
  public async createUser(
    @Body() createUserDTO: CreateUserDTO,
  ): Promise<UserEntity> {
    return await this.usersService.createUser(createUserDTO);
  }
}
