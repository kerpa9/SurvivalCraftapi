import { Router } from "express";
import { PlayerRoutes } from "./playerRoutes";
import { UsersRoutes } from "./usersRoute";

export class AppRoutes {
  static get routes(): Router {
    const routerApp = Router();

    //Roots

    routerApp.use("/players", PlayerRoutes.routesPlayers);

    routerApp.use("/users", UsersRoutes.routesUser);
    return routerApp;
  }
}
