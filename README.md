# Red Social - API

### URL base: http://localhost:9000/api/v1

- /auth
  - /login -> Login con las respectivas credenciales 

- /posts
  - /me -> Mis publicaciones
  - /users/:id -> Obtener publicación de un usuario
  - /:id -> Obtener una publicación en específico
  - /:id/comments -> Comentarios de una publicación
  - /:id/likes -> Likes de una publicación

- /users
  - /me -> Mi información
  - /:id -> Información de un usuario
  - /:id/follow -> Añadir amigo

- /follows
  - /:id

- /followers
  - /:id

### Controllers Posts
- [x] findAllPosts
- [x] findPostById
- [x] createPost
- [x] updatePost
- [x] removePost

### Services Posts
- [ ] getAllPosts
- [ ] getPostById
- [ ] postNewPost
- [ ] patchPost
- [ ] putPost
- [ ] deletePost