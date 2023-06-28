import axios from "axios";
import { Book } from "../models/Book";

export let fetched_book: Book;

export const getBook = async (id: string) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/library/books/${id}/`);
        fetched_book = Book.createBook(
            response.data.id,
            response.data.title,
            response.data.author,
            response.data.description,
            response.data.published_date,
            response.data.publisher,
            response.data.language,
            response.data.genre,
            response.data.ranking,
            response.data.owner,
            response.data.highlighted,
            response.data.updated,
            response.data.image,
            response.data.category,
            response.data.trending
          );
        
        return fetched_book;
        
      } catch (error) {
        console.log(error);
        return [];
      }
    };