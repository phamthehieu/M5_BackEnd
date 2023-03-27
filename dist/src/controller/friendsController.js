"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const friendsService_1 = __importDefault(require("../service/friendsService"));
const userService_1 = __importDefault(require("../service/userService"));
class AuthController {
    constructor() {
        this.sendFriends = async (req, res) => {
            try {
                let sendFriend = req.body;
                sendFriend.status = 'confirm';
                let user = await this.FriendsService.sendFriends(sendFriend);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.confirmFriends = async (req, res) => {
            try {
                let user = await this.FriendsService.confirmFriends(req.body.idSender, req.body.idReceiver);
                res.status(200).json(user);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.listSendFriends = async (req, res) => {
            try {
                let id = req.params.id;
                let status = 'confirm';
                let list = await this.FriendsService.listSendFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.listReceiveFriends = async (req, res) => {
            try {
                let id = req.params.id;
                let status = 'confirm';
                let list = await this.FriendsService.listReceiveFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.listFriends = async (req, res) => {
            try {
                let id = req.params.id;
                let status = 'friend';
                let list = await this.FriendsService.listFriends(id, status);
                res.status(200).json(list);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.remove = async (req, res) => {
            try {
                let friend = await this.FriendsService.remove(req.query.idSender, req.query.idReceiver);
                res.status(200).json(friend);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.friendSuggestion = async (req, res) => {
            try {
                let id = req.params.id;
                let users = await this.UserService.friendSuggestion(id);
                res.status(200).json(users);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.FriendsService = friendsService_1.default;
        this.UserService = userService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=friendsController.js.map