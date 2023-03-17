import { TABLE_NAME } from '@/shared/constants';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class category1679044477583 implements MigrationInterface {
  public table = new Table({
    name: TABLE_NAME.CATEGORY,
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
      },
      {
        name: 'slug',
        type: 'varchar',
        length: '100',
        isNullable: false,
      },
      {
        name: 'category',
        type: 'varchar',
        length: '100',
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
    ],
  });
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
