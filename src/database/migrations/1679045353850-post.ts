import { TABLE_NAME } from '@/shared/constants';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class post1679045353850 implements MigrationInterface {
  public table = new Table({
    name: TABLE_NAME.POST,
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
      },
      {
        name: 'slug',
        type: 'varchar',
        length: '45',
        isNullable: false,
      },
      {
        name: 'title',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'description',
        type: 'varchar',
        length: '255',
        isNullable: false,
      },
      {
        name: 'text',
        type: 'text',
        isNullable: false,
      },
      {
        name: 'created_at',
        type: 'datetime(6)',
        default: `CURRENT_TIMESTAMP(6)`,
      },
      {
        name: 'updated_at',
        type: 'datetime(6)',
        default: `CURRENT_TIMESTAMP(6)`,
      },
      {
        name: 'deleted_at',
        type: 'datetime',
        isNullable: true,
        default: null,
      },
      {
        name: 'user_id',
        type: 'int',
        isNullable: false,
      },
      {
        name: 'category_id',
        type: 'int',
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
