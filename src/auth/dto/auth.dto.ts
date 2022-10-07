import { IsEmail, IsNotEmpty, IsString} from 'class-validator';
import { isString } from 'util';

export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;


    @IsString()
    @IsNotEmpty()
    password: string;
}