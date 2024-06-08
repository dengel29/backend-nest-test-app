import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDurationToBlockExerciseAddSectionToBlock1717827658352
  implements MigrationInterface
{
  name = 'AddDurationToBlockExerciseAddSectionToBlock1717827658352';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP COLUMN "repMin"`,
    );
    await queryRunner.query(
      `ALTER TABLE "block" ADD "section" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "repBase" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "durationBase" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "durationMax" integer`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP COLUMN "durationMax"`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP COLUMN "durationBase"`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP COLUMN "repBase"`,
    );
    await queryRunner.query(`ALTER TABLE "block" DROP COLUMN "section"`);
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "repMin" integer NOT NULL`,
    );
  }
}
