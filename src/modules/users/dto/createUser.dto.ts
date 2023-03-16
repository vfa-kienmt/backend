/**
 * createUser.dto.ts
 * backend
 * Created by khuongdv <khuongdv@vitalify.asia> on 3/16/23
 * Copyright (c) 2023 VFA Asia Co.,Ltd. All rights reserved.
 */
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(55)
  @ApiProperty({
    type: String,
    description: 'Name of the user',
    example: 'John Doe',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'Email address of the user',
    example: 'john@gmail.com',
  })
  email: string;
}
