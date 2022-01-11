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
    businesArea?: string;
    employmentType?: string;
    contractType?: string;
    location?: string;
}

export enum MenuItemTypes {
    DASHBOARD,
    VACANCY,
    USERS,
    POSTS
}