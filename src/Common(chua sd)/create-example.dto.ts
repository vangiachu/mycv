// src/dto/create-example.dto.ts

import { IsString, IsInt } from 'class-validator';

export class CreateExampleDto {
  @IsString()
  name: string;

  @IsInt()
  userId: number;
}