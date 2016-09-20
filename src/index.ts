import * as bodyParser from 'body-parser';
import * as express from 'express';
import {Application, Router} from 'express';
import {UserRoute} from "./routes/UserRoute";
import {StorageManager} from './storage/StorageManager'
import {UserService} from "./service/UserService";

class Server {
  public application: Application;

  public constructor() {
    new StorageManager();

    this.application = express();
    this.config();
    this.routes();
    this.application.listen('8001');
  }

  private config(): void {
    this.application.use(bodyParser.urlencoded({extended: true}));
    this.application.use(bodyParser.json());
  }

  private routes(): void {
    let router: Router = express.Router();

    let userService = new UserService();
    let userRoute = new UserRoute(router, userService);
    userRoute.initialize();

    this.application.use(router);
  }
}

let server = new Server();
export default server.application as any;
