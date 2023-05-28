import { getInstanceRouter } from "xpresser";

/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get("/", "App@index").name("index");

Route.get("/books", "Books@index");
Route.post("/books", "Books@create");
Route.get("/books/:id", "Books@show");
Route.put("/books/:id", "Books@update");
Route.delete("/books/:id", "Books@destroy");
Route.delete("/books", "Books@destroyAll");

/**
 * Add 404 routes after plugins are loaded.
 */
Route.routesAfterPlugins = () => {
    Route.get("*", "App@notFound").name("404");
};
