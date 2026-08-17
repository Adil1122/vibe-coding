import { IsDateString, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @Min(0)
  age: number;

  @IsDateString()
  dob: string;
}