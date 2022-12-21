const uuid = require('uuid');

const Posts = require('../models/posts.models');

async function findAllPosts() {
    const data = await Posts.findAll();
    return data;
}

async function findPostById(id) {
    const data = await Posts.findOne({
        where: {
            id: id
        }
    })
    return data;
}

async function createPost(obj) {
    const data = await Posts.create({
        id: uuid.v4(),
        userId: obj.userId,
        content: obj.content
    })
    return data;
}

async function updatePost(id, obj) {
    const data = await Posts.update(obj, {
        where: {
            id: id,
            userId: userId
        }
    })
    return data[0];
}

async function removePost(id) {
    const data = await Posts.destroy({
        where: {
            id: id
        }
    });
    return data;
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    removePost
}