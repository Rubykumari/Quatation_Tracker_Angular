export class Register{
    userId: number;
    userName: string;
    emailId: string;
    fullName: string;
    password: string;
    role: string
    constructor(){
        this.userId = 0;
        this.userName = "";
        this.emailId = "";
        this.fullName = '';
        this.password = "";
        this.role = '';
    }
}
export class Login{
    userName: string;
    password: string;
    constructor(){
        this.userName = "";
        this.password = "";
    }
}
export interface IApiResponse{
    message: string;
    result: true;
    data: any;
}
