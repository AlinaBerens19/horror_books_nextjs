
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Book } from "../models/Book";

export let books: Book[] = []

export const getData = async (url: string) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      // console.log('BOOKS ==> ', data.results);
      books = data.results.map((book: Book) => {
        return Book.createBook(
          book.id,
          book.title,
          book.author,
          book.description,
          book.published_date,
          book.publisher,
          book.language,
          book.genre,
          book.ranking,
          book.owner,
          book.highlighted,
          book.updated,
          book.image,
          book.category,
          book.trending
        );
      });
      return books;
      
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  

export const postData: SubmitHandler<FieldValues> = async (data) => {
    
    await axios.post('http://127.0.0.1:8000/library/books/', data)
    .then(() => {
        console.log('Book added successfully');
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })
}

