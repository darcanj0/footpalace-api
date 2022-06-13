import LoginServices from "../services/login.services.js";

const loginServices = new LoginServices();

class LoginControllers {
  async signIn(req, res) {
    const { email, password } = req.body;
    try {
      const login = await loginServices.signIn({ email, password });
      res.send({ token: login.token, userId: login.userId });
    } catch (error) {
      res.status(error.status).send({ message: error.message });
    }
  }
}

export default LoginControllers;
