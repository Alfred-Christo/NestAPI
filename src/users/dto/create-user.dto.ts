import { IsString, IsDateString, IsPhoneNumber, Matches } from 'class-validator';

export class CreateUserDto {
  @IsDateString()
  date: string;

  @IsString()
  fcm_token: string;

  @IsPhoneNumber('IN')
  phone_number: string;

  @Matches(/^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/, {
    message: 'Time must be in format HH:MM:SS',
  })
  time: string;

  @IsString()
  username: string;
}