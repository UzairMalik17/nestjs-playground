import { Injectable } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';

@Injectable()
export class GetUsersDTO {
  @IsString()
  name: string;

  @IsEmail()
  email?: string;
}
