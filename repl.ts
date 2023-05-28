/**
 * https://xpresserjs.com/cli/repl.html
 */
import { XpresserRepl } from "xpresser";

const repl = new XpresserRepl();

// Set Config Provider
repl.setXpresserProvider(() => {
    const { $ } = require("./app") as typeof import("./app");
    return $;
});

/**
 * Run some tasks or add context before repl starts
 * repl.server is undefined.
 * @param $ - Current Xpresser Instance
 */
repl.beforeStart(($) => {
    // Add Example Context to repl
    repl.addContextFromFolder($.path.backend('models'), null, null, context => {
        return context.default ? context.default : context;
    })
});

/**
 * Start Repl Server.
 * Function will run after repl server starts.
 * @param $ - Current Xpresser Instance
 */
repl.start(($) => {
    // repl.server is now defined.
    // Any Customization to the repl server `repl.server` directly can be done here.
}).catch(console.error);
