import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExercisesBlocksEquipmentWorkoutTables1717769518167
  implements MigrationInterface
{
  name = 'CreateExercisesBlocksEquipmentWorkoutTables1717769518167';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "workout" ("id" SERIAL NOT NULL, "trainerName" character varying, "duration" integer NOT NULL, "instructions" character varying(1024) NOT NULL, "bodyFocus" character varying array NOT NULL, CONSTRAINT "PK_ea37ec052825688082b19f0d939" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "setCount" integer NOT NULL, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "block_exercise" ("id" SERIAL NOT NULL, "repMin" integer NOT NULL, "repMax" integer, "weight" integer, "exerciseId" integer, "blockId" integer, CONSTRAINT "PK_722e6ff0afc978e5bf2fdf912e7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "equipment" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "icon" character varying, "description" character varying(512), CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exercise" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "muscleGroups" character varying array NOT NULL, "info" character varying(512), CONSTRAINT "PK_a0f107e3a2ef2742c1e91d97c14" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD CONSTRAINT "FK_80bd5fe064dbc26f07120fe99a4" FOREIGN KEY ("exerciseId") REFERENCES "exercise"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" ADD CONSTRAINT "FK_652c6da898b5b6f41566c4ff389" FOREIGN KEY ("blockId") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP CONSTRAINT "FK_652c6da898b5b6f41566c4ff389"`,
    );
    await queryRunner.query(
      `ALTER TABLE "block_exercise" DROP CONSTRAINT "FK_80bd5fe064dbc26f07120fe99a4"`,
    );
    await queryRunner.query(`DROP TABLE "exercise"`);
    await queryRunner.query(`DROP TABLE "equipment"`);
    await queryRunner.query(`DROP TABLE "block_exercise"`);
    await queryRunner.query(`DROP TABLE "block"`);
    await queryRunner.query(`DROP TABLE "workout"`);
  }
}
