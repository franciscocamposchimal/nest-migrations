import {MigrationInterface, QueryRunner} from "typeorm";

export class cars1574877087090 implements MigrationInterface {
    name = 'cars1574877087090'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "car" ("id" SERIAL NOT NULL, "marca" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "car"`, undefined);
    }

}
