import { $ } from "../app";

class MyRequestEngine extends $.extendedRequestEngine() {
    /**
     * Declare custom functions you want on `http` object
     * For example:
     */

    error(status: number, message: string) {
        return this.status(status).json({ error: message });
    }
}

export = MyRequestEngine;

// Extend default Http Type
declare module "xpresser/types/http" {
    interface Http extends MyRequestEngine {}
}
