import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Users } from "../interfaces/users.interface";

export class LoginAuthDto implements Users {


    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
    
}