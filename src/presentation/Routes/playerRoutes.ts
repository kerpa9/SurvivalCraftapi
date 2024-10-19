import { Router } from "express";
import { PlayerService } from "../Services/playerService";
import { PlayerController } from "../Controllers/playerController";

export class PlayerRoutes {
  static get routesPlayers(): Router {
    const routerPlayer = Router();

    const playerService = new PlayerService();
    const playerController = new PlayerController(playerService);

    routerPlayer.post("/", playerController.createPlayer);

    return routerPlayer;
  }
}
