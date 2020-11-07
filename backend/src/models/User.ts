import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import bcrypt from 'bcryptjs';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password_pass: string;
  
  @Column()
  admin: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPassword() {
    if (this.password_pass) {
      this.password_pass = await bcrypt.hash(this.password_pass, 8);
    }
  }
}