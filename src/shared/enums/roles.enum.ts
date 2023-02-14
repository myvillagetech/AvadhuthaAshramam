export enum Roles{
    USER ='USER',
    EMPLOYEE = 'EMPLOYEE',
    ADMIN = 'ADMIN'
}

export type IRoles = typeof Roles[keyof typeof Roles];