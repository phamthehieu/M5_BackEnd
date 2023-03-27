import { Request, Response } from "express";
declare class UserController {
    private UserService;
    constructor();
    editUser: (req: Request, res: Response) => Promise<void>;
    lockUser: (req: Request, res: Response) => Promise<void>;
    showListUser: (req: Request, res: Response) => Promise<void>;
    showProfileUser: (req: Request, res: Response) => Promise<void>;
    showProfile: (req: Request, res: Response) => Promise<void>;
    changePassword: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
