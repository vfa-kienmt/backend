import { TABLE_NAME } from '@/shared/constants';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

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
}
