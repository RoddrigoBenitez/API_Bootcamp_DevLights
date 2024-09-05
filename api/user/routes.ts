import express from "express";
import { userController } from "./controller";
import  isRole  from "../../middle/isRole";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser } = userController;

userRouter.get("/", isRole('admin', 'comprador', 'vendedor'), getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", isRole('admin'), deleteUser);
userRouter.put("/editUser/:id", editUser);

export default userRouter;
