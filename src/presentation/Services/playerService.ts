import { QuestPlayer, Users } from "../../Data";
import { Players } from "../../Data/Postgres/Models/PlayerModel";
import { CreatePlayerDTO } from "../../Domain/DTOS/player/createPlayerDTO";
import { CatchError } from "../../Domain/Errors/CatchError";
import { UsersServices } from "./Users.services";

export class PlayerService {
  constructor(private readonly userService: UsersServices) {}

  public async createPlayer(createPlayerDTO: CreatePlayerDTO, userId: number) {
    const userPromise = this.userService.findOneUser(userId);

    const playerPromise = this.findOnePlayerByName(createPlayerDTO.name);

    const [userP, playerP] = await Promise.all([userPromise, playerPromise]);

    const player = new Players();
    // const user = new Users();
    // user.id = userId;
    // player.id = userId;
    // const userPromise=this.userService

    player.user = userP;
    player.name = createPlayerDTO.name.toLocaleLowerCase().trim();

    // console.log(userId);

    try {
      return await player.save();
    } catch (error) {
      throw CatchError.internalServer("¡Something went very wrong!");
    }
  }

  public async findOnePlayer(id: number) {}

  public async findOnePlayerByName(name: string) {
    const player = await Players.findOne({
      where: {
        name,
      },
    });

    if (player) throw CatchError.badRequest("This name is already taken");
    return player;
  }
}
