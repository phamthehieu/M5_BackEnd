declare class UserService {
    private userRepository;
    constructor();
    editUser: (id: any, newUser: any) => Promise<any>;
    getAll: () => Promise<any>;
    getUser: (id: any) => Promise<any>;
    getProfileUser: (idUser: any, id: any) => Promise<any>;
    lock: (id: any) => Promise<any>;
    changePassword: (user: any, newPass: any) => Promise<any>;
    findUser: (id: any) => Promise<any>;
    friendSuggestion: (id: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
