import { ApiProperty } from '@nestjs/swagger';
import {
    ArrayMaxSize,
    ArrayMinSize,
    IsArray,
    IsDateString,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
    Matches
  } from 'class-validator';
  
  export class UpdateUserDto {
    @IsOptional()
    @IsString()
    @IsPhoneNumber('VN')
    @ApiProperty()
    phone_number?: string;
  
    @IsNotEmpty()
    @IsString()
    @Matches(/^[\p{L} .'-]+$/u)
    @ApiProperty()
    full_name: string;
  
    @IsString()
    @IsIn(['MALE', 'FEMALE'])
    @ApiProperty()
    gender: 'MALE' | 'FEMALE';
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    avatar?: string;
  
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address?: string;
  
    @IsOptional()
    @IsDateString()
    @ApiProperty()
    birthday?: Date;
  
    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    @ApiProperty()
    location?: number[];
  }