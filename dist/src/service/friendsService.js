"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const friends_1 = require("../model/friends");
class FriendsService {
    constructor() {
        this.sendFriends = async (send) => {
            await this.friendsRepository.save(send);
            return 'Success';
        };
        this.confirmFriends = async (idUser, id) => {
            let sql = `UPDATE friends SET status = 'friend' where (idReceiver = ${idUser} and idSender = ${id}) or (idReceiver = ${id} and idSender = ${idUser})`;
            await this.friendsRepository.query(sql);
            return 'Success';
        };
        this.listSendFriends = async (id, status) => {
            let sql = `SELECT * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'`;
            return await this.friendsRepository.query(sql);
        };
        this.listReceiveFriends = async (id, status) => {
            let sql = `SELECT * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`;
            return await this.friendsRepository.query(sql);
        };
        this.listFriends = async (id, status) => {
            let sql = `select * from friends f JOIN users u ON f.idSender = u.idUser where f.idReceiver = ${id} and f.status = '${status}'
                   union
                   select * from friends f JOIN users u ON f.idReceiver = u.idUser where f.idSender = ${id} and f.status = '${status}'`;
            return await this.friendsRepository.query(sql);
        };
        this.remove = async (sender, receiver) => {
            let sql = `delete from friends where (idReceiver = ${receiver} and idSender = ${sender}) or (idReceiver = ${sender} and idSender = ${receiver} )`;
            await this.friendsRepository.query(sql);
            return 'Success';
        };
        this.friendsRepository = data_soure_1.AppDataSource.getRepository(friends_1.Friends);
    }
}
exports.default = new FriendsService();
//# sourceMappingURL=friendsService.js.map