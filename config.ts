/**
 * Your Config File.
 * See https://xpresserjs.com/configuration/
 */
import env from "./env";
import { parseServerUrl } from "xpress-mongo";

/**
 * Parse MongoDB URL
 */
const mongoUrl = parseServerUrl(env.DB_SERVER, {
    dbname: env.DB_NAME,
    password: env.DB_PASSWORD
});

export = {
    // name of app
    name: env.APP_NAME,

    // app environment
    env: env.NODE_ENV,

    /**
     * By default, xpresser sets this for you.
     */
    server: {
        domain: env.APP_HOST,
        // Server Port
        port: env.APP_PORT,

        use: {
            cors: true
        }
    },

    /**
     * Path settings.
     */
    paths: {
        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,

        /**
         * Point routes file to routes.ts
         */
        routesFile: "backend://routes.ts"
    },

    /**
     * If Enabled, xjs make:model will generate Models
     * that requires you to define all data types.
     */
    useStrictTypescriptModels: true, // >=v1.0.0

    // Connection Config
    mongodb: {
        url: mongoUrl,
        database: env.DB_NAME
    }
};
