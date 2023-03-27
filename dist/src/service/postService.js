"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const posts_1 = require("../model/posts");
class PostService {
    constructor() {
        this.getPostsUser = async (id) => {
            return await this.postRepository.find({ idUser: id });
        };
        this.getAll = async () => {
            let sql = 'select * from users u join posts p on u.idUser = p.idUser';
            let posts = await this.postRepository.query(sql);
            return posts;
        };
        this.save = async (post) => {
            await this.postRepository.save(post);
            return 'success';
        };
        this.findByIdPost = async (id) => {
            return await this.postRepository.findOneBy({ idPost: id });
        };
        this.update = async (id, newPost) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return this.postRepository.update({ idPost: id }, newPost);
        };
        this.findById = async (id) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return post;
        };
        this.remove = async (id) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            return this.postRepository.delete({ idPost: id });
        };
        this.findByName = async (search) => {
            let sql = ` select p.content,p.image,p.role,p.time, u.userName from users u join posts p on u.idUser = p.idUser where u.userName like '%${search}%'`;
            let post = await this.postRepository.query(sql);
            if (!post) {
                return null;
            }
            return post;
        };
        this.postRepository = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map