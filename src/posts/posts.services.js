const postControllers = require('./posts.controllers');

function getAllPosts(req, res) {
    postControllers.findAllPosts()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json( {message: err.message} )
        })
}

function getPostById(req, res) {
    const id = req.params.id;

    postControllers.findPostById(id)
    .then(data => {
        if (data){
            res.status(200).json(data)
        } else {
            res.status(404).json({message: `Invalid id: (${id})`})
        }
    })
    .catch(err => {
        res.status(400).json( {message: err.message} )
    })
}

function postNewPost(req, res) {
    const userId = req.user.id;

    const { content } = req.body;
    postControllers.createPost({userId, content})
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(400).json({
                message: err.message,
                fields: {
                    content: "text"
                }
            })
        })
}

function patchPost(req, res) {
    const { content } = req.body;
    const id = req.params.id;
    const userId = req.user.id;

    postControllers.updatePost(id, userId, {content})
        .then(data => {
            if (data) {
                res.status(200).json({message: `Post with id:${id} was edited successfully by user ${userId}`})
            } else {
                res.status(400).json({message: 'Post not available or unauthorized'})
            }
        })
        .catch(err => {
            res.status(200).json({message: err.message})
        })
}

const deletePost = (req, res) => {
    const id = req.params.id 
    postControllers.removePost(id)
        .then(data => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllPosts,
    getPostById,
    postNewPost,
    patchPost,
    deletePost
}