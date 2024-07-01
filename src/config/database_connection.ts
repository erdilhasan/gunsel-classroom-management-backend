// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db_config: any = {
  development: {
    username: "erdil",
    password: "123456",
    database: "gunsel_classroom",
    host: "localhost",
    dialect: "mysql",
    models: [__dirname + "/models"],
  },
};

export default db_config;
// TODO: change to dotenv
