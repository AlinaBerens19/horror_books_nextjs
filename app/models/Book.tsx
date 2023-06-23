
export class Book {
  id: string;
  title: string | null;
  author: string | null;
  description: string | null;
  published_date: string | null;
  publisher: string | null;
  updated: string | null;
  language: string | null;
  genre: string | null;
  ranking: number | null;
  owner: string | null;
  highlighted: string | null;
  image: string | undefined;
  category: string | null;
  trending: boolean | null;

  constructor(
    id: string,
    title: string | null,
    author: string | null,
    description: string | null,
    published_date: string | null,
    publisher: string | null,
    updated: string | null,
    language: string | null,
    genre: string | null,
    ranking: number | null,
    owner: string | null,
    highlighted: string | null,
    image: string | undefined,
    category: string | null,
    trending: boolean | null
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.published_date = published_date;
    this.publisher = publisher;
    this.updated = updated;
    this.language = language;
    this.genre = genre;
    this.ranking = ranking;
    this.owner = owner;
    this.highlighted = highlighted;
    this.image = image;
    this.category = category;
    this.trending = trending;
  }

  static createBook(
    id: string,
    title: string | null,
    author: string | null,
    description: string | null,
    published_date: string | null,
    publisher: string | null,
    language: string | null,
    genre: string | null,
    ranking: number | null,
    owner: string | null,
    highlighted: string | null,
    updated: string | null,
    image: string | undefined,
    category: string | null,
    trending: boolean | null
  ): Book {
    return new Book(
      id,
      title,
      author,
      description,
      published_date,
      publisher,
      updated,
      language,
      genre,
      ranking,
      owner,
      highlighted,
      image,
      category,
      trending
    );
  }
}
