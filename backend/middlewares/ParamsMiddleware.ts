import { Http } from "xpresser/types/http";
import Book from "../models/Book";

/**
 * ParamsMiddleware
 */
export = {
    /**
     * BookId
     * @param {Xpresser.Http} http
     */
    async bookId(http: Http) {
        if (!http.hasParam("id")) {
            return http.error(400, "Book Id is required!");
        }

        const id = http.params.id as string;
        const book = await Book.findById(id);

        if (!book) {
            return http.error(404, "Book not found!");
        }

        // add book to book data
        // boot data is accessible in all controllers as the second argument.
        http.addToBoot("book", book);

        return http.next();
    }
};
