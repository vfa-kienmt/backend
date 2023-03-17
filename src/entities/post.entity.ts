import { TABLE_NAME } from '@/shared/constants';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from './categories.entity';
import { UserEntity } from './user.entity';

@Entity({ name: TABLE_NAME.POST })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  slug: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'text' })
  text: string;

  @OneToMany((type) => UserEntity, (userEntity) => userEntity.id)
  user_id: UserEntity;

  @OneToMany((type) => CategoryEntity, (categoryEntity) => categoryEntity.id)
  category: CategoryEntity;
}
