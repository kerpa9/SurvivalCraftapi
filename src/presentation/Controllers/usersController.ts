// import { Request, Response } from "express";

// export class UsersController {
//   constructor(private readonly userService: UsersServices) {}

//   private handleError = (err: any, res: Response) => {
//     if (err instanceof CatchError)
//       return res.status(err.statusCode).json({ message: err.message });
//     console.log(err);
//     return res.status(500).json({ message: "Something went very wrong!" });
//   };

//   registerUser = (req: Request, res: Response): any => {
//     const [error, registerDTO] = RegisterDTO.registeUser(req.body);
//     if (error) return res.status(422).json({ message: error });
//     this.userService
//       .registerUserServices(registerDTO!)
//       .then((data) => {
//         return res.status(200).json(data);
//       })
//       .catch((err: any) => this.handleError(err, res));
//   };
// }
