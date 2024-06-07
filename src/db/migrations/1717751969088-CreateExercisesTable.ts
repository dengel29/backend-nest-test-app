import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExercisesTable1717751969088 implements MigrationInterface {
  name = 'CreateExercisesTable1717751969088';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "otherName"`);
    await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "displayName"`);
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD "muscleGroup" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "muscleGroup"`);
    await queryRunner.query(`ALTER TABLE "exercise" DROP COLUMN "name"`);
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD "displayName" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise" ADD "otherName" character varying NOT NULL`,
    );
  }
}
