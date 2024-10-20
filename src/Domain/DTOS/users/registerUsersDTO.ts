import { regularExps } from "../../../Config/regularExp";

export class RegisterUserDTO {
  private constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  static registerUser(object: {
    [key: string]: any;
  }): [string?, RegisterUserDTO?] {
    const { username, email, password } = object;

    if (!username) return ["Missing username"];
    if (!email) return ["Invalid email"];
    if (!regularExps.email.test(email)) return ["Invalid email"];
    if (!password)
      return [
        "Password is missing or not accepted if its length is less than ten characters.",
      ];
    if (!regularExps.password.test(password))
      return [
        "Password is missing or not accepted if its length is less than ten characters.",
      ];
    return [undefined, new RegisterUserDTO(username, email, password)];
  }
}
