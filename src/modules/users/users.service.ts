import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '@/repositories/user/user.repository';
import { UserEntity } from '@/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  /**
   * Find a user by id
   */
  public async findUser(): Promise<UserEntity> {
    const user = await this.usersRepository.findUserById(1);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
