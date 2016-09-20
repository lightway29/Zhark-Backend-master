import {IUser} from "../model/User";
import {User} from "../model/User";
import IPromise = Q.IPromise;
import * as Q from 'q';

export interface IUserService {
  getUsers(): IPromise<IUser[]>;
  saveUser(data: any): IPromise<void>;
  putUser(data: any): IPromise<void>;
}

export class UserService implements IUserService {
  public getUsers(): IPromise<IUser[]> {
    let defer = Q.defer<IUser[]>();
    User.find({}, (err: any, users: IUser[]): void => {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(users);
      }
    });

    return defer.promise;
  }

  public saveUser(data: any): IPromise<void> {
    let defer = Q.defer<void>();
    new User(data).save(function (err: any) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve();
      }
    });

    return defer.promise;
  }

  public putUser(data: any): IPromise<void> {
    let defer = Q.defer<void>();
    let query = { id: '57dfd85abec13e250cd54daa' };
    new User.update({ name: 'miren' },new User(data),{multi: true},function (err: any) {
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve();
      }
    });

    return defer.promise;
  }
}
