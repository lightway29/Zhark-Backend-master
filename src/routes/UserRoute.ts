import {Router, Request, Response, NextFunction} from "express";
import {IUser} from '../model/User';
import {Error} from "../model/Error";
import {HttpStatus} from "../util/HttpStatus";
import {IUserService} from "../service/UserService";
import IPromise = Q.IPromise;

export class UserRoute {
  private router: Router;
  private userService: IUserService;

  public constructor(router: Router, userService: IUserService) {
    this.router = router;
    this.userService = userService;

  }

  public initialize(): void {

    this.router.post('/user', (req: Request, res: Response, next: NextFunction): any => {
      let request = req as any;
      this.userService.saveUser(request.body).then(() => {
        res.status(HttpStatus.success).send('User saved success');
      }, () => {
        let error = new Error('10001', 500, 'User save failure');
        res.status(HttpStatus.error).send(error.toString());
      });
    });

    this.router.get('/user', (req: Request, res: Response, next: NextFunction): any => {
      this.userService.getUsers().then((users: IUser[]) => {
        res.status(HttpStatus.success).send(JSON.stringify(users));
      }, () => {
        let error = new Error('10001', 500, 'User retrieval failure');
        res.status(HttpStatus.error).send(error.toString());
      })
    });

    this.router.post('/user', (req: Request, res: Response, next: NextFunction): any => {
      let request = req as any;
      this.userService.putUser(request.body).then(() => {
        res.status(HttpStatus.success).send('User saved success');
      }, () => {
        let error = new Error('10001', 500, 'User save failure');
        res.status(HttpStatus.error).send(error.toString());
      });
    });
  }
}
