export interface JWT {
    access_token: string;
    clientId: string;
    expires_in: number;
    forename: string;
    lastLoggedIn: string;
    surname: string;
    token_type: string;
    userId: string;
    userName: string;
    roles: string;
}

export interface AccountModel {
    username: string;
    password: string;
}

export interface PostModel {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}

export interface UsersModel {
    _id: number;
    title?: string;
    firstname?: string;
    surname?: string;
    address?: string;
    city?: string;
    postcode?: string;
    county?: string;
    country?: string;
    mobile?: string;
    email?: string;
    DOB?: string;
    age?: string;
    isDeleted?: false
}

export interface locationModel {
    name: string;
    code: string;
}

export interface IOptionLookup {
    value: string
}

export interface VacanciesModel {
    _id?: number;
    jobTitle?: string;
    salary?: Number;
    salaryType?: string;
    businessArea?: string;
    employmentType?: string;
    contractType?: string;
    location?: string;
}

export enum MenuItemTypes {
    DASHBOARD,
    VACANCY,
    USERS,
    SEARCH,
    POSTS,
    UPLOAD
}