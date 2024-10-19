// import { Users } from "../../data";
// import { RegisterDTO } from "../../domain/dtos";
// import { CatchError } from "../../domain/errors/catchError";

// export class UsersServices {
//   constructor() {}

//   public async registerUserServices(registerDTO: RegisterDTO) {
//     const existUser = await Users.findOne({
//       where: { email: registerDTO.email },
//     });

//     if (existUser) throw CatchError.badRequest("Email already exist");

//     const user = new Users();
//     user.username = registerDTO.username;
//     user.email = registerDTO.email;
//     user.password = registerDTO.password;

//     try {
//       return await user.save();
//     } catch (err: any) {
//       throw CatchError.internalServer(err);
//     }
//   }
// }
