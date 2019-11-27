import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeColumnItem1574870153392 implements MigrationInterface {
    name = 'ChangeColumnItem1574870153392'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id")`, undefined);
    }

}
