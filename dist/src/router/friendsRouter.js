"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsRouter = void 0;
const express_1 = require("express");
const friendsController_1 = __importDefault(require("../controller/friendsController"));
exports.friendsRouter = (0, express_1.Router)();
exports.friendsRouter.post('/send-friends', friendsController_1.default.sendFriends);
exports.friendsRouter.post('/confirm-friends', friendsController_1.default.confirmFriends);
exports.friendsRouter.get('/:id', friendsController_1.default.listFriends);
exports.friendsRouter.delete('', friendsController_1.default.remove);
exports.friendsRouter.get('/friend-suggestion/:id', friendsController_1.default.friendSuggestion);
exports.friendsRouter.get('/list-send-friends/:id', friendsController_1.default.listSendFriends);
exports.friendsRouter.get('/list-receive-friends/:id', friendsController_1.default.listReceiveFriends);
//# sourceMappingURL=friendsRouter.js.map