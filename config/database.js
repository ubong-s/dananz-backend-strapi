const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    // client: "sqlite",
    // connection: {
    //   filename: path.join(
    //     __dirname,
    //     "..",
    //     env("DATABASE_FILENAME", ".tmp/data.db")
    //   ),
    // },
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "dananz"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "0000"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env.json("DATABASE_SSL_SELF", false), // For self-signed certificates
    },
    debug: false,
    useNullAsDefault: true,
  },
});
