import { Request, Response } from "express";
import { PlayerService } from "../Services/playerService";
import { CatchError } from "../../Domain/Errors/CatchError";
import { CreatePlayerDTO } from "../../Domain/DTOS/player/createPlayerDTO";

export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  private handleError = (err: any, res: Response) => {
    if (err instanceof CatchError)
      return res.status(err.statusCode).json({ message: err.message });
    console.log(err);

    return res.status(500).json({ message: "Something went very throw" });
  };

  createPlayer = (req: Request, res: Response) => {
    const [error, createPlayerDTO] = CreatePlayerDTO.createPlayer(req.body);

    if (error) return res.status(422).json({ message: error });

    this.playerService
      .createPlayer(createPlayerDTO!)
      .then((player) => res.status(200).json(player))
      .catch((err: any) => this.handleError(err, res));
  };
}
