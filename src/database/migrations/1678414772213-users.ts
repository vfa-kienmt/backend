import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TABLE_NAME } from '@/shared/constants/tableName';

export class users1678414772213 implements MigrationInterface {
  public table = new Table({
    name: TABLE_NAME.USER,
    columns: [
      {
        name: 'id',
        type: 'int',
        isPrimary: true,
      },
      {
        name: 'name',
        type: 'varchar',
        length: '40',
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
