import { DataSource } from "typeorm";
import { Players } from "./Models/PlayerModel";
import { Users } from "./Models/UsersModel";

interface Options {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export class PostgresDatabaseConfig {
  private datasource: DataSource;

  constructor(options: Options) {
    this.datasource = new DataSource({
      type: "postgres",
      host: options.host,
      username: options.username,
      password: options.password,
      database: options.database,

      //Entities
      entities: [Players, Users],
      synchronize: true,

      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  async connect() {
    try {
      await this.datasource.initialize();
      console.log("Connected to database 🚀🚀");
    } catch (error: any) {
      console.log(error);
    }
  }
}
