import { envs } from "./Config/envs";
import { PostgresDatabaseConfig } from "./Data/Postgres/PostgresDatabase";
import { AppRoutes } from "./Presentation/Routes/indexRoute";
import { Server } from "./Presentation/server";

(async () => {
  main();
})();

async function main() {
  const postgresdb = new PostgresDatabaseConfig({
    host: envs.DATABASE_HOST,
    port: envs.DATABASE_PORT,
    username: envs.DATABASE_USERNAME,
    password: envs.DATABASE_PASSWORD,
    database: envs.DATABASE_DATABASE,
  });

  await postgresdb.connect();

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });
  await server.start();
}
