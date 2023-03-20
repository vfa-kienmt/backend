import { TABLE_NAME } from '@/shared/constants';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
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

  @ManyToOne((type) => UserEntity, (user) => user.posts)
  user: UserEntity;

  @ManyToOne((type) => CategoryEntity, (category) => category.posts)
  category: CategoryEntity;
}
