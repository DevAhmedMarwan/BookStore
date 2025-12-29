import useBooksStore from "@/Store/Books";
import React, { useEffect } from "react";
import { useParams } from "react-router";

const SingleBooks = () => {
  const { fetchSingleBook, singleBook } = useBooksStore();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleBook(id);
  }, [id]);

  if (!singleBook) return null;
  return (
    <div>
      <div>
        <div>
          <img
          className="w-[400px] h-[250px] rounded-lg"
            src={singleBook.volumeInfo.imageLinks?.thumbnail}
            alt={singleBook}
          />
        </div>
        <p>{singleBook.volumeInfo.title}</p>
        <p>{singleBook.volumeInfo.authors}</p>
        <p>{singleBook.volumeInfo.publishedDate}</p>
        <p>{singleBook.volumeInfo.description}</p>
        <p>{singleBook.volumeInfo.pageCount}</p>
        <p>{singleBook.volumeInfo.categories}</p>
      </div>
    </div>
  );
};

export default SingleBooks;
