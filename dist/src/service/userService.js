"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const users_1 = require("../model/users");
class UserService {
    constructor() {
        this.editUser = async (id, newUser) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            return await this.userRepository.update({ idUser: id }, newUser);
        };
        this.getAll = async () => {
            let user = await this.userRepository.find();
            return user;
        };
        this.getUser = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            return user;
        };
        this.getProfileUser = async (idUser, id) => {
            let sql = `select *
                   from users u
                            join friends f on (u.idUser = f.idSender) or (u.idUser = f.idReceiver)
                   where (f.idReceiver = ${idUser} and f.idSender = ${id})
                      or (f.idReceiver = ${id} and f.idSender = ${idUser})
                       and idUser = ${id}`;
            return await this.userRepository.query(sql);
        };
        this.lock = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                if (user.status === 'open') {
                    return this.userRepository.update({ idUser: id }, { status: 'locked' });
                }
                else {
                    return this.userRepository.update({ idUser: id }, { status: 'open' });
                }
            }
        };
        this.changePassword = async (user, newPass) => {
            return await this.userRepository.update({ idUser: user.idUser }, { password: newPass });
        };
        this.findUser = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            else {
                return user;
            }
        };
        this.friendSuggestion = async (id) => {
            let sql = `select *
                   from users
                   where idUser not in (select idSender from friends where idReceiver = ${id} or idSender = ${id})
                     and idUser not in (select idReceiver from friends where idSender = ${id} or idReceiver = ${id})
                     and idUser != ${id}    
        `;
            return await this.userRepository.query(sql);
        };
        this.userRepository = data_soure_1.AppDataSource.getRepository(users_1.Users);
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map