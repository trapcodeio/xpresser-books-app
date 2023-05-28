import { Controller, Http } from "xpresser/types/http";
import Book, { BookDataType, BookForm } from "../models/Book";

/**
 * BooksController
 *
 * `book` is optional because it is not available in all methods.
 * only methods with `Params.bookId` middleware will have `book`.
 */
export = <Controller.Object<{ book?: Book }>>{
    // Controller Name
    name: "BooksController",

    // Middlewares
    middlewares: {
        "Params.bookId": ["show", "update", "destroy"]
    },

    /**
     * Books - GET /books
     */
    async index() {
        const books = await Book.find<BookDataType>();
        return books.map(Book.toResponse);
    },

    /**
     * Books - POST /books
     */
    async create(http) {
        const body = http.$body.all<BookForm>();

        // Validate Form
        const formError = Book.validateForm(body);
        if (formError) return http.error(400, formError);

        // Create Book
        const book = await Book.make(body).saveAndReturn();

        // Return Book Response
        return Book.toResponse(book.data);
    },

    /**
     * View Book - GET /books/:id
     */
    show(_, { book }) {
        // book is added to http.boot in ParamsMiddleware
        return Book.toResponse(book!.data);
    },

    /**
     * Update Book - PUT /books/:id
     */
    async update(http, { book }) {
        const body = http.$body.all<BookForm>();

        // Validate Form
        const formError = Book.validateForm(body);
        if (formError) return http.error(400, formError);

        // Update Book
        await book!.update(<Partial<BookDataType>>{
            ...body,
            updatedAt: new Date()
        });

        // Return Book Response
        return Book.toResponse(book!.data);
    },

    /**
     * Delete Book - DELETE /books/:id
     */
    async destroy(_, { book }) {
        await book!.delete();

        return { message: `Deleted Book: ${book!.data.title}` };
    },

    /**
     * Delete All Books - DELETE /books
     */
    async destroyAll() {
        await Book.native().deleteMany({});

        return { message: "Deleted All Books" };
    }
};
