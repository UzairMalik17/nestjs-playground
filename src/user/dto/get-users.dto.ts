import { Injectable } from '@nestjs/common';
import { IsNumber, IsString } from 'class-validator';

@Injectable()
export class GetUsersDTO {
  @IsString()
  firstname: string;

  @IsNumber()
  id: number;
}
