const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { getAllUsers, getUserById, getUserByLastNameOrMajor, createUser, replaceUser, updateUser, deleteUser, getAuth } = require("./controllers/controllerUsers");
const { checkBody, checkAuth } = require("./middlewares/middlewares");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/', checkAuth, getAllUsers);

app.get('/auth', getAuth)

app.get('/user/:id', checkAuth, getUserById)

app.get('/users', checkAuth, getUserByLastNameOrMajor)

app.post('/', checkAuth, checkBody, createUser)

app.put('/users/replace/:id', replaceUser)

app.patch('/users/update/:id',checkAuth, updateUser)

app.delete('/users/delete/:id',checkAuth, deleteUser)


app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
});
