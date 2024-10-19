import { Players } from "../../Data/Postgres/Models/PlayerModel";
import { CreatePlayerDTO } from "../../Domain/DTOS/player/createPlayerDTO";
import { CatchError } from "../../Domain/Errors/CatchError";

export class PlayerService {
  constructor() {}

  public async createPlayer(createPlayerDTO: CreatePlayerDTO) {
    const player = new Players();

    player.name = createPlayerDTO.name;
    player.level = createPlayerDTO.level;
    player.experience = createPlayerDTO.experience;
    player.health = createPlayerDTO.health;
    player.energy = createPlayerDTO.energy;

    try {
      return await player.save();
    } catch (error) {
      throw CatchError.internalServer("¡Something went very wrong!");
    }
  }
}
