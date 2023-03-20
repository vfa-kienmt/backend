import { TABLE_NAME } from '@/shared/constants';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';
import { PostEntity } from './post.entity';

@Entity({ name: TABLE_NAME.CATEGORY })
export class CategoryEntity extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: '100',
  })
  slug: string;

  @Column({
    type: 'varchar',
    length: '100',
  })
  category: string;

  @OneToMany((type) => PostEntity, (post) => post.category)
  posts: PostEntity[];
}
