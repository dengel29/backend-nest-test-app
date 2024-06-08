import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateJoinTablesWorkoutExerciseBlockAndExerciseEquipment1717815191242
  implements MigrationInterface
{
  name =
    'GenerateJoinTablesWorkoutExerciseBlockAndExerciseEquipment1717815191242';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exercise_equipment" ("exercise" integer NOT NULL, "equipment" integer NOT NULL, CONSTRAINT "PK_e74e8fa272eac7b8c6b3ef3ace0" PRIMARY KEY ("exercise", "equipment"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a51b3f9c9179589f905e9da1a7" ON "exercise_equipment" ("exercise") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_de08407297ff99898730482b97" ON "exercise_equipment" ("equipment") `,
    );
    await queryRunner.query(
      `CREATE TABLE "workout_block_exercise" ("workout" integer NOT NULL, "block_exercise" integer NOT NULL, CONSTRAINT "PK_f2bfb07859fde5b945bf11dafcc" PRIMARY KEY ("workout", "block_exercise"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d5348136c0b0dc754485c1d09a" ON "workout_block_exercise" ("workout") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ef153c7368cb62fb68266304ef" ON "workout_block_exercise" ("block_exercise") `,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_equipment" ADD CONSTRAINT "FK_a51b3f9c9179589f905e9da1a71" FOREIGN KEY ("exercise") REFERENCES "exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_equipment" ADD CONSTRAINT "FK_de08407297ff99898730482b970" FOREIGN KEY ("equipment") REFERENCES "equipment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "workout_block_exercise" ADD CONSTRAINT "FK_d5348136c0b0dc754485c1d09a2" FOREIGN KEY ("workout") REFERENCES "workout"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "workout_block_exercise" ADD CONSTRAINT "FK_ef153c7368cb62fb68266304efa" FOREIGN KEY ("block_exercise") REFERENCES "block_exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "workout_block_exercise" DROP CONSTRAINT "FK_ef153c7368cb62fb68266304efa"`,
    );
    await queryRunner.query(
      `ALTER TABLE "workout_block_exercise" DROP CONSTRAINT "FK_d5348136c0b0dc754485c1d09a2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_equipment" DROP CONSTRAINT "FK_de08407297ff99898730482b970"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exercise_equipment" DROP CONSTRAINT "FK_a51b3f9c9179589f905e9da1a71"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ef153c7368cb62fb68266304ef"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d5348136c0b0dc754485c1d09a"`,
    );
    await queryRunner.query(`DROP TABLE "workout_block_exercise"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_de08407297ff99898730482b97"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a51b3f9c9179589f905e9da1a7"`,
    );
    await queryRunner.query(`DROP TABLE "exercise_equipment"`);
  }
}
