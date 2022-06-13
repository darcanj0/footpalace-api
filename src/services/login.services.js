import Users from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class LoginServices {
  async signIn({ email, password }) {
    const user = await Users.findOne({ email });

    if (!user) {
      throw { status: 404, message: "User not found!" };
    }

    const correctPassword = await bcryptjs.compare(password, user.password);

    if (!correctPassword) {
      throw { status: 401, message: "Incorrect password!" };
    }

    const token = jwt.sign({ email: email }, "secret", { expiresIn: "8h" });

    return { status: 200, token: token, userId: user._id };
  }
}

export default LoginServices;
