import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BooklistComponents } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useFetch(GetBookData, "books");
  return (
    <div className="">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-between ">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.id}`}>
            <BooklistComponents  data={i} /></Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
