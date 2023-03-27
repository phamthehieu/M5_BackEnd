declare class AuthService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User not found" | "User is already locked" | "Password does not match" | {
        token: any;
        idUser: any;
        userName: any;
        role: any;
        status: any;
    }>;
}
declare const _default: AuthService;
export default _default;
