import { IUser } from "../model/User";
import IPromise = Q.IPromise;
import * as Q from 'q';
export interface IUserService {
    getUsers(): IPromise<IUser[]>;
    saveUser(data: any): IPromise<void>;
}
export declare class UserService implements IUserService {
    getUsers(): IPromise<IUser[]>;
    saveUser(data: any): IPromise<void>;
}
