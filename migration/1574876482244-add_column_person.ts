import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnPerson1574876482244 implements MigrationInterface {
    name = 'addColumnPerson1574876482244'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "person" ADD "ruta" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "ruta"`, undefined);
    }

}
