import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductoTable1761741918707 implements MigrationInterface {
    name = 'CreateProductoTable1761741918707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precios" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripción" character varying NOT NULL, "estado" boolean NOT NULL, "categoriaId" integer, CONSTRAINT "PK_4680901d0dbc98fac6a8588cda8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Productos" ADD CONSTRAINT "FK_11e56c4175d8b277b59b7e26a08" FOREIGN KEY ("categoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Productos" DROP CONSTRAINT "FK_11e56c4175d8b277b59b7e26a08"`);
        await queryRunner.query(`DROP TABLE "Productos"`);
    }

}
