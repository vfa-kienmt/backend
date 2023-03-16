/**
 * user.repository.ts
 * sos_backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/9/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { DataSource, Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserInterface } from '@/repositories/user/user.interface';

@Injectable()
export class UserRepository extends Repository<User> implements UserInterface {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  /**
   * Find user by id
   *
   * @param id
   */
  findUserById(id: number): Promise<User> {
    return this.findOne({ where: { id } });
  }
}
