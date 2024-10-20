import { Router } from "express";
import { PlayerService } from "../Services/playerService";
import { PlayerController } from "../Controllers/playerController";
import { UsersServices } from "../Services/Users.services";

export class PlayerRoutes {
  static get routesPlayers(): Router {
    const routerPlayer = Router();

    const userService = new UsersServices();
    const playerService = new PlayerService(userService);
    const playerController = new PlayerController(playerService);

    routerPlayer.post("/", playerController.createPlayer);

    return routerPlayer;
  }
}
