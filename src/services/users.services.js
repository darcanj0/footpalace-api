import Users from "../models/User.js";
import bcryptjs from "bcryptjs";

class UsersServices {
  async getAllUsers() {
    const users = await Users.find();
    if (users.length === 0) {
      throw { status: 404, message: "No user was found!" };
    }
    return users;
  }

  async getUserById({ id }) {
    const selectedUser = await Users.findById(id);
    return selectedUser;
  }

  async createUser({ email, name, password, admin }) {
    const encryptedPassword = await bcryptjs.hash(password, 8);
    const newUser = { email, name, password: encryptedPassword, admin };
    try {
      const createdUser = await Users.create(newUser);
      return createdUser;
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ email, name, password, admin, id }) {
    const encryptedPassword = await bcryptjs.hash(password, 8);
    const userUpdate = { email, name, password: encryptedPassword, admin };
    try {
      await Users.updateOne({ _id: id }, userUpdate);
      const updatedUser = await Users.findById(id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser({ id }) {
    await Users.findByIdAndDelete(id);
  }
}

export default UsersServices;
