/**
 * user.entity.ts
 * sos_backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/9/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { randomInt } from 'crypto';
import { TABLE_NAME } from '@/shared/constants';
import { PostEntity } from './post.entity';

@Entity({
  name: TABLE_NAME.USER,
})
export class UserEntity extends Base {
  @PrimaryGeneratedColumn()
  id: number = randomInt(1000000);

  @Column({
    type: 'varchar',
    length: 45,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 45,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 60,
  })
  password: string;

  @OneToMany((type) => PostEntity, (post) => post.user)
  posts?: PostEntity[];
}
