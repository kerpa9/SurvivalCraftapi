export class CreatePlayerDTO {
  private constructor(
    public readonly name: string,
    public readonly level: number,
    public readonly experience: number,
    public readonly health: number,
    public readonly energy: number
  ) {}

  static createPlayer(object: {
    [key: string]: any;
  }): [string?, CreatePlayerDTO?] {
    const { name, level, experience, health, energy } = object;

    if (!name) return ["Missing name"];
    if (!level || level < 0) return ["Missing level"];
    if (!experience || experience < 0) return ["Missing experience"];
    if (!health || health < 0) return ["Missing health"];
    if (!energy || energy < 0) return ["Missing energy"];

    return [
      undefined,
      new CreatePlayerDTO(name, level, experience, health, energy),
    ];
  }
}
