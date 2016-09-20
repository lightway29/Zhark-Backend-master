import * as mongoose from 'mongoose';

export class StorageManager {
  public constructor() {
    mongoose.Promise = (<any>global).Promise;
    mongoose.connect('mongodb://localhost/test');
  }
}


