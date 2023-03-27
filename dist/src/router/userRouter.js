"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const checkRole_1 = require("../middleware/checkRole");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', checkRole_1.checkRole, userController_1.default.showListUser);
exports.userRouter.put('/:id', userController_1.default.editUser);
exports.userRouter.put('/lock/:id', checkRole_1.checkRole, userController_1.default.lockUser);
exports.userRouter.put('/password/:id', userController_1.default.changePassword);
exports.userRouter.get('/profile/:id', userController_1.default.showProfile);
exports.userRouter.get('/profileUser', userController_1.default.showProfileUser);
//# sourceMappingURL=userRouter.js.map