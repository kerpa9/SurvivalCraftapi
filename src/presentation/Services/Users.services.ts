import { Users } from "../../Data";
import { RegisterUserDTO } from "../../Domain/DTOS/users/registerUsersDTO";
import { CatchError } from "../../Domain/Errors/CatchError";

export class UsersServices {
  constructor() {}

  public async registerUserServices(registerDTO: RegisterUserDTO) {
    const existUser = await Users.findOne({
      where: { email: registerDTO.email },
    });

    if (existUser) throw CatchError.badRequest("Email already exist");

    const user = new Users();
    user.username = registerDTO.username;
    user.email = registerDTO.email;
    user.password = registerDTO.password;

    try {
      return await user.save();
    } catch (err: any) {
      throw CatchError.internalServer(err);
    }
  }

  public async findOneUser(id: number) {
    const user = await Users.findOne({
      where: {
        id,
      },
    });
    if (!user) throw CatchError.notFound("User not found");

    return user;
  }
}
