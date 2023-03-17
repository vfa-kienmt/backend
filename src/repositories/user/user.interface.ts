/**
 * user.interface.ts
 * nestjs-backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/14/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { UserEntity } from '@/entities/user.entity';

export interface UserInterface {
  findUserById(id: number): Promise<UserEntity>;
  findUserByEmail(email: string): Promise<UserEntity>;
}
