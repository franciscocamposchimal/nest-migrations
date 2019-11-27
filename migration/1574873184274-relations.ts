import {MigrationInterface, QueryRunner} from "typeorm";

export class relations1574873184274 implements MigrationInterface {
    name = 'relations1574873184274'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "photo" ADD "personId" integer`, undefined);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_46b206e31143643d94de60b6bea" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_46b206e31143643d94de60b6bea"`, undefined);
        await queryRunner.query(`ALTER TABLE "photo" DROP COLUMN "personId"`, undefined);
    }

}
