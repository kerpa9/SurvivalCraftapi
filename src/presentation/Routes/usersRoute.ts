import { Router } from "express";
import { UsersServices } from "../Services/Users.services";
import { UsersController } from "../Controllers/usersController";

export class UsersRoutes {
  static get routesUser(): Router {
    const userService = new UsersServices();
    const userController = new UsersController(userService);
    const routerUser = Router();

    routerUser.post("/register", userController.registerUser);
    return routerUser;
  }
}
