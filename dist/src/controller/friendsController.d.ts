import { Request, Response } from "express";
declare class AuthController {
    private FriendsService;
    private UserService;
    constructor();
    sendFriends: (req: Request, res: Response) => Promise<void>;
    confirmFriends: (req: Request, res: Response) => Promise<void>;
    listSendFriends: (req: Request, res: Response) => Promise<void>;
    listReceiveFriends: (req: Request, res: Response) => Promise<void>;
    listFriends: (req: Request, res: Response) => Promise<void>;
    remove: (req: Request, res: Response) => Promise<void>;
    friendSuggestion: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
