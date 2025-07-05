import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @Column({ nullable: false, unique: true })
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: 'Unique identifier for the entity' })
  id: string;

  @ApiProperty({ default: Date.now })
  @Column({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true, default: null })
  @ApiProperty()
  updatedAt: Date;

  @Column({ default: null })
  @ApiProperty()
  createdBy: string;

  @Column({ default: null })
  @ApiProperty()
  updatedBy: string;
}
