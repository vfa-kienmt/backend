/**
 * user.repository.ts
 * sos_backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/9/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '@/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserInterface } from '@/repositories/user/user.interface';

@Injectable()
export class UserRepository
  extends Repository<UserEntity>
  implements UserInterface
{
  constructor(private dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  /**
   * Find user by id
   *
   * @param id
   */
  findUserById(id: number): Promise<UserEntity> {
    return this.findOne({ where: { id } });
  }
}
