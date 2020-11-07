import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1604687278729 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
		name: 'users',
			columns: [
				{
					name: 'id',
					type: 'integer',
					unsigned: true,
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment'
				},
				{
					name: 'name',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'email',
					type: 'varchar',
					isUnique: true,
					isNullable: false
				},
				{
					name: 'password_pass',
					type: 'varchar',
					isNullable: false
				},
				{
					name: 'admin',
					type: 'boolean',
					default: false,
				},
			],
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('users');
	}
}
