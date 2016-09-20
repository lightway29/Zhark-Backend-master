import * as mongoose from 'mongoose';
export interface IUser {
    name: string;
    age: number;
}
export declare let User: mongoose.Model<mongoose.Document>;
