import { Controller } from "xpresser/types/http";

const AppController = <Controller.Object>{
    /**
     * Controller name.
     * @type {string}
     */
    name: "AppController",

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index: () => ({
        message: "Xpresser Books API"
    }),

    /**
     * 404 Page handler
     * @param http
     */
    notFound: (http) => http.error(404, "Not Found")
};

export = AppController;
