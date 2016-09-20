import { Router } from "express";
import { IUserService } from "../service/UserService";
export declare class UserRoute {
    private router;
    private userService;
    constructor(router: Router, userService: IUserService);
    initialize(): void;
}
