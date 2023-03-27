import { Request, Response } from "express";
declare class PostController {
    private postService;
    constructor();
    getPostUser: (req: Request, res: Response) => Promise<void>;
    findByIdPost: (req: Request, res: Response) => Promise<void>;
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
