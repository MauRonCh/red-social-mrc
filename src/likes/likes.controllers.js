const uuid = require('uuid')
const Likes = require('../models/likes.models');
const Users = require('../models/users.models');

async function findAllLikesFromPost(postId) {
    const data = await Likes.findAll({
        where: {
            postId: postId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        }
    })
    return data.map(like => like.user);
}

async function createLike(obj) {

    const validate = await Likes.findOne({
        where: {
            userId: obj.userId,
            postId: obj.postId
        }
    })

    if (validate) {
        return null
    }

    const data = await Likes.create({
        id: uuid.v4(),
        userId: obj.userId,
        postId: obj.postId
    })
    return data
}


module.exports = {
    findAllLikesFromPost,
    createLike
}