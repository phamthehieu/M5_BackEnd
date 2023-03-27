import { Request, Response } from "express";
declare class AuthController {
    private AuthService;
    constructor();
    login: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
