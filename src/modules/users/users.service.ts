import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '@/repositories/user/user.repository';
import { UserEntity } from '@/entities/user.entity';
import { CreateUserDTO } from './dto/createUser.dto';
import { getHash } from '@/shared/constants/hashPassword';

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

  public async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {
    try {
      const user = await this.usersRepository.findUserByEmail(
        createUserDTO.email,
      );
      if (user) {
        throw new BadRequestException('Email exist.');
      }
      const createUser = await this.usersRepository.create(createUserDTO);
      createUser.password = await getHash(createUserDTO.password);
      return this.usersRepository.save(createUser);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
