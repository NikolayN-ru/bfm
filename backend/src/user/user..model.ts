export class UserModel extends TimeStamps{
    email: string;
    password: string;
    isAdmin: boolean;
    favorites?: [];
}