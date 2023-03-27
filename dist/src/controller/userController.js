"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    constructor() {
        this.editUser = async (req, res) => {
            try {
                let id = req.params.id;
                let editProfile = await this.UserService.editUser(id, req.body);
                res.status(200).json({
                    Message: 'Update user success',
                    editProfile
                });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.lockUser = async (req, res) => {
            try {
                let id = req.params.id;
                let lock = await this.UserService.lock(id);
                res.status(200).json({ lock });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showListUser = async (req, res) => {
            try {
                let users = await this.UserService.getAll();
                res.status(200).json(users);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showProfileUser = async (req, res) => {
            try {
                let user = await this.UserService.getProfileUser(req.query.idUser, req.query.id);
                res.status(200).json({ user });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.showProfile = async (req, res) => {
            try {
                let id = req.params.id;
                let user = await this.UserService.getUser(id);
                res.status(200).json({ user });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.changePassword = async (req, res) => {
            try {
                let id = req.params.id;
                let user = await userService_1.default.findUser(id);
                let passwordCompare = await bcrypt_1.default.compare(req.body.password, user.password);
                if (!passwordCompare) {
                    res.status(200).json('wrong password');
                }
                else {
                    let newPass = await bcrypt_1.default.hash(req.body.newPassword, 10);
                    let response = await userService_1.default.changePassword(user, newPass);
                    res.status(200).json(response);
                }
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.UserService = userService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map