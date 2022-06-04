import UsersServices from "../services/users.services.js";

const usersServices = new UsersServices();

class UsersControllers {
  async getAllUsers(req, res) {
    try {
      const users = await usersServices.getAllUsers();
      res.send(users);
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }

  async getUserById(req, res) {
    const id = req.params.id;
    const selectedUser = await usersServices.getUserById({ id });
    res.send(selectedUser);
  }

  async createUser(req, res) {
    const { email, name, password, admin } = req.body;
    try {
      const createdUser = await usersServices.createUser({
        email,
        name,
        password,
        admin,
      });
      res.status(201).send(createdUser);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send({
          message: `This email is already registered: ${error.keyValue.email}`,
        });
      }
    }
  }

  async updateUser(req, res) {
    const id = req.params.id;
    const { email, name, password, admin } = req.body;
    try {
      const updatedUser = await usersServices.updateUser({
        email,
        name,
        password,
        admin,
        id,
      });
      res.send(updatedUser);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send({
          message: `This email is already registered: ${error.keyValue.email}`,
        });
      }
    }
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    await usersServices.deleteUser({ id });
    res.sendStatus(204);
  }
}

export default UsersControllers;
