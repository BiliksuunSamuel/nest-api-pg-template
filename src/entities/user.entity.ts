import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '.';
import { UserRole } from 'src/enums';

@Entity()
export class User extends BaseEntity {
  @Column({ nullable: false, unique: true })
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty()
  password: string;

  @Column({ nullable: false, type: 'jsonb', default: [] })
  @ApiProperty()
  tokenIds: string[];

  @Column({
    nullable: false,
    default: UserRole.User,
    type: 'enum',
    enum: UserRole,
  })
  @ApiProperty()
  role: UserRole;
}
