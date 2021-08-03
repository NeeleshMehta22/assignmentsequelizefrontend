import { Iusers } from "./user.modal";

export interface Iroutes{
    createuser(user:Iusers):any|void;
    getuser(user:Iusers):any;
    updateuser(user:any):any;
    deleteuser(user:Iusers):any;

}