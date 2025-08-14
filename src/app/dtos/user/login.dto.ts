import { IsString, IsNotEmpty, IsPhoneNumber, IsDate } from 'class-validator'

export class LoginDTO {
    phone_number: string;
    password: string;
    role_id: number = 2;

    constructor(data: any) {
        this.phone_number = data.phone_number;
        this.password = data.password;
        this.role_id = data.roleId;
    }
}