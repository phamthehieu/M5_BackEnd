"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
class PostController {
    constructor() {
        this.getPostUser = async (req, res) => {
            try {
                let posts = await postService_1.default.getPostsUser(req.params.id);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByIdPost = async (req, res) => {
            try {
                let posts = await postService_1.default.findByIdPost(req.params.id);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.getAll = async (req, res) => {
            try {
                let posts = await postService_1.default.getAll();
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let post = req.body;
                await this.postService.save(post);
                res.status(200).json('Success');
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            let id = req.params.id;
            let newPost = req.body;
            await this.postService.update(id, newPost);
            res.status(200).json('Success!');
        };
        this.remove = async (req, res) => {
            let id = req.params.id;
            await this.postService.remove(id);
            res.status(200).json('Success!');
        };
        this.postService = postService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map