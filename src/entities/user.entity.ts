/**
 * user.entity.ts
 * sos_backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/9/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';
import { TABLE_NAME } from '@/shared/constants/table-name';

@Entity({
  name: TABLE_NAME.USER,
})
export class User extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 45,
  })
  name: string;
}
