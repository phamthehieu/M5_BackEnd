declare class FriendsService {
    private friendsRepository;
    constructor();
    sendFriends: (send: any) => Promise<string>;
    confirmFriends: (idUser: any, id: any) => Promise<string>;
    listSendFriends: (id: any, status: any) => Promise<any>;
    listReceiveFriends: (id: any, status: any) => Promise<any>;
    listFriends: (id: any, status: any) => Promise<any>;
    remove: (sender: any, receiver: any) => Promise<string>;
}
declare const _default: FriendsService;
export default _default;
