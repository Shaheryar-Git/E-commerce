import Users from "../Models/usersModels.js";
import comparePassword from "../Helpers/compare.js";
import JWT from "jsonwebtoken";

const logInController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        message: "ALL INFROMATION ARE REQUIRED",
        success: false,
      });
    }

    let user = await Users.findOne({ email });
    if (!user) {
      res.status(400).send({
        message: "Email does not match",
        success: false,
      });
    }

    let comparedPassword = await comparePassword(password, user.password);
    if (!comparedPassword) {
      res.status(400).send({
        message: "PASSWORD does not match",
        success: false,
      });
    }

    let token = JWT.sign({ _id: user._id }, "process.env.JWT_key", {
      expiresIn: "300h",
    });

    res.status(200).send({
      message: "YOU ARE LOGIN...NOW ORDER FREELY",
      success: true,
      user: {
        name: user.name,
        phon: user.phone,
      },
      token,
    });
  } catch (error) {
    res.status(400).send({
      message: "ERROR IN METHOD",
      success: false,
    });
    error;
  }
};

export default logInController;
