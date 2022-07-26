export type User = {
    email: string;
    password: string;
    name?: string;
    age?: number;
}

export type UserDto = Omit<User, 'password'>