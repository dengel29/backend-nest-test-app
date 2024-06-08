import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddOrderToBlockAndBlockExercise1717834293356
  implements MigrationInterface
{
  name = 'AddOrderToBlockAndBlockExercise1717834293356';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "block" ADD "order" integer NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "order" integer NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "block_exercise" DROP COLUMN "order"`);
    await queryRunner.query(`ALTER TABLE "block" DROP COLUMN "order"`);
  }
}
