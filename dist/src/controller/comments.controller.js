"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const comments_1 = require("../model/comments");
const posts_1 = require("../model/posts");
const http_errors_1 = __importDefault(require("http-errors"));
const CommentRepo = data_soure_1.AppDataSource.getRepository(comments_1.Comments);
const PostRepo = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
class CommentController {
    async newComment(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.idPost },
            });
            if (!post) {
                return next((0, http_errors_1.default)(401, "Post Not Found"));
            }
            const comment = await CommentRepo.save({
                idUser: req.params.idUser,
                content: req.body.comment,
                idPosts: req.params.idPost,
                time: req.body.time
            });
            res.status(201).json({
                success: true,
                comment,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async DeleteComment(req, res, next) {
        try {
            const comment = await CommentRepo.findOne({
                where: { idComment: req.params.idComment },
            });
            if (!comment) {
                return next((0, http_errors_1.default)(404, "Post Not Found"));
            }
            await CommentRepo.delete({ idComment: req.params.idComment });
            res.status(200).json({
                success: true,
                message: "Comment Delete Success",
            });
        }
        catch (error) {
            next(error);
        }
    }
}
;
exports.default = new CommentController();
//# sourceMappingURL=comments.controller.js.map