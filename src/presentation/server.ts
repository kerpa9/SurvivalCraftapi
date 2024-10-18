import express, { Request, Response, Router } from "express";
import helmet from "helmet";
import hpp from "hpp";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    this.port = options.port;
    this.routes = options.routes;
  }

  async start() {
    //MIDDLEWARES

    //Control of data JSON
    this.app.use(express.json());
    //Control of data JSON
    this.app.use(express.urlencoded({ extended: true }));

    this.app.get("/", (req: Request, res: Response) => {
      return res.send("Welcome to my API, SurvivalCraft!");
    });

    //Routes

    //Cors

    // Security DoS
    this.app.use(helmet());
    this.app.use(hpp());

    this.app.listen(this.port, () => {
      console.log(`Server is running on port http://localhost:${this.port}`);
    });
  }
}
