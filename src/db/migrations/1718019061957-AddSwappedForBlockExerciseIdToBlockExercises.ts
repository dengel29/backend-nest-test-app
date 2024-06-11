import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSwappedForBlockExerciseIdToBlockExercises1718019061957
  implements MigrationInterface
{
  name = 'AddSwappedForBlockExerciseIdToBlockExercises1718019061957';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD "swappedForBlockExerciseId" integer`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP COLUMN "swappedForBlockExerciseId"`,
    );
  }
}
