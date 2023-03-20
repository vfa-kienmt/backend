import { TABLE_NAME } from '@/shared/constants';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

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
        name: 'userId',
        type: 'int',
        isNullable: false,
      },
      {
        name: 'categoryId',
        type: 'int',
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
    await queryRunner.createForeignKey(
      TABLE_NAME.POST,
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: TABLE_NAME.USER,
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      TABLE_NAME.POST,
      new TableForeignKey({
        columnNames: ['categoryId'],
        referencedColumnNames: ['id'],
        referencedTableName: TABLE_NAME.CATEGORY,
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
    await queryRunner.dropTable(TABLE_NAME.USER);
    await queryRunner.dropTable(TABLE_NAME.CATEGORY);
  }
}
