"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = require("express");
const comments_controller_1 = __importDefault(require("../controller/comments.controller"));
exports.commentRouter = (0, express_1.Router)();
exports.commentRouter.post('/:idUser/:idPost', comments_controller_1.default.newComment);
exports.commentRouter.delete('/:idComment', comments_controller_1.default.DeleteComment);
//# sourceMappingURL=CommentRouter.js.map