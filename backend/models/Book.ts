import { is, XMongoSchema } from "xpress-mongo";
import { UseCollection } from "@xpresser/xpress-mongo";
import BaseModel from "./BaseModel";

/**
 * Interface for Model's `this.data`. (For Typescript)
 * Optional if accessing data using model helper functions
 *
 * @example
 * this.data.updatedAt? // type Date
 * this.data.createdAt // type Date
 */
export interface BookDataType {
    _id: string;
    title: string;
    description: string;
    available: boolean;
    updatedAt?: Date;
    createdAt: Date;
}

export type BookResponse = Omit<BookDataType, "_id"> & { id: string };
export type BookForm = Pick<BookDataType, "title" | "description" | "available">;

class Book extends BaseModel {
    /**
     * Model Schema
     */
    static schema: XMongoSchema<BookDataType> = {
        title: is.String().required(),
        description: is.String().required(),
        available: is.Boolean().default(true),
        updatedAt: is.Date(),
        createdAt: is.Date().required()
    };

    // SET Type of this.data.
    public data!: BookDataType;

    /**
     * Validate Book Form
     */
    static validateForm(form: BookForm): string | undefined {
        if (!form.title) {
            return "Title is required";
        } else if (!form.description) {
            return "Description is required";
        }
    }

    static toResponse(book: BookDataType): BookResponse {
        return {
            id: book._id,
            title: book.title,
            description: book.description,
            available: book.available,
            updatedAt: book.updatedAt,
            createdAt: book.createdAt
        };
    }
}

/**
 * Map Model to Collection: `books`
 * .native() will be made available for use.
 */
UseCollection(Book, "books");

// Export Model as Default
export default Book;
