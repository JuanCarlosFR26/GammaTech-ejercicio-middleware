const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { getAllUsers, getUserById, getUserByLastNameOrMajor, createUser, replaceUser, updateUser, deleteUser } = require("./controllers/controllerUsers");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/', getAllUsers)

app.get('/user/:id', getUserById)

app.get('/users', getUserByLastNameOrMajor)

app.post('/', createUser)

app.put('/users/replace/:id', replaceUser)

app.patch('/users/update/:id', updateUser)

app.delete('/users/delete/:id', deleteUser)


app.listen(8000, () => {
  console.log(`Server listening on port ${PORT}`);
});
