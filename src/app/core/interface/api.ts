export interface PostModel {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
}

export interface AlbumModel {
    userId?: number,
    id?: number;
    title?: string;
}

export interface UsersModel {
    _id?: number;
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

// export interface CompanyModel {
//     name?: string;
//     catchPhrase?: string;
//     bs?: string;
// }