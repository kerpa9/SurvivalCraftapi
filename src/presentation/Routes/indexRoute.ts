import { Router } from "express";
import { PlayerRoutes } from "./playerRoutes";

export class AppRoutes {
  static get routes(): Router {
    const routerApp = Router();

    //Roots

    routerApp.use("/players", PlayerRoutes.routesPlayers);
    return routerApp;
  }
}
