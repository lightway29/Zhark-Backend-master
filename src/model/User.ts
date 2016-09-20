import * as mongoose from 'mongoose';
import {Schema} from "mongoose";

export interface IUser {
  name: string;
  age: number;
}

let user = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

export let User = mongoose.model('User', user);


