import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { GetauthorData } from "./service/author.service";
import {Routes, Route} from "react-router-dom"
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "../Not.found";


const App = () => {
  const { loading, error, data } = useFetch(GetBookData,"author");
  console.log(data);

  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
     

      {/* {loading ? (<h1>Loading.....</h1>) : (<>{data ? <>{JSON.stringify(data)}</> : (<h1>{error}</h1>)}</>)} */}
    </div>
  );
};

export default App;
