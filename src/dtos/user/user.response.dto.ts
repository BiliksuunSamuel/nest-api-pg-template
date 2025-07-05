import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/entities';

export class UserResponse extends BaseEntity {
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
}
