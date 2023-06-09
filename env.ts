import { Env } from "@xpresser/env";
import { resolve } from "path";

const env = Env(
    resolve(".env"),
    {
        NODE_ENV: Env.is.enum(["development", "production"] as const, "development"),

        APP_NAME: Env.is.string("Books App"),
        APP_PORT: Env.is.number(9000),
        APP_HOST: Env.optional.string("Localhost"),

        MONGODB_SERVER: Env.is.string("mongodb://127.0.0.1:27017"),
        MONGODB_DATABASE: Env.is.string("books"),
        MONGODB_PASSWORD: Env.optional.string()
    },
    {
        expose: true,
        fileIsOptional: true,
        useProcessEnv: true
    }
);

export default env;
