enum Role{
    Subscriber,
    superadmin,
    Admin
}

// export class Iusers{
//     constructor(
//         id:number,
//         firstname:string,
//         lastname:string,
//         email:string,
//         phonenumber:number,
//         role:Role,
//         address:string,
//     ){}
// }
export interface Iusers{
   
        id:number,
        firstname:string,
        middlename:string,
        lastname:string,
        email:string,
        phonenumber:number,
        role:Role,
        address:string,
        cname:string

}