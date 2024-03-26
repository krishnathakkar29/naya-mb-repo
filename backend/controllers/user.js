import { asyncError } from "../middlewares/errorMiddleware.js";
import { User } from "../models/User.js";

export const myProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

//all
export const logout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);

    res.clearCookie("connect.sid");
    res.status(200).json({
      message: "Logged Out Successfully",
    });
  });
};

export const getAdminUsers = asyncError(async (req, res, next) => {
  const user = await User.find({});
  res.status(200).json({
    success: true,
    user
});
});
