import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailBookPage = () => {

  const { id } = useParams();
  const nav = useNavigate();
  const { data, loading, error } = useFetch(GetBookData, `books/${id}`);
  const handleback = () =>{
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <>
           <div>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleback}>Back</button>
           <div className="flex">
                <div className=" card mx-auto justify-center p-3 w-[200px] h-[440px] border rounded-lg	col-auto  my-8 ">
                    <div className="mx-auto">
                  
                        <img className="rounded-lg mx-auto  mx-auto  w-[150px] h-[200px] " src={data.img} alt="" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">{data.title}</h1>
                        <h2 className="text-sm text-gray-400">{data.author}</h2>
                    </div>
                    <div>
                        <p className="">{data.description}</p>
                    </div>
                </div>
            </div>
           </div>
            </>
          )}
        </>
      )}
    </div>
    
  );
};

export default DetailBookPage;
