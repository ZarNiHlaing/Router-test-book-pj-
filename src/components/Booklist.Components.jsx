import React from "react";

const BooklistComponents = ({ data }) => {
  return (
    <div className=" carddetail p-4 w-[200px] h-[440px] border rounded-lg	 my-8 ">
       <div>
        {/* <img class="item-in-cart-img ms-3" src="{product.image}" alt=""> */}
        <img className="rounded-lg mx-auto  w-full h-[200px]" src={data.img} alt="" />
      </div>
      <div>
        <h1 className="text-lg font-bold">{data.title}</h1>
        <h2 className="text-sm text-gray-400">{data.author}</h2>
      </div>
      <div>
        <p className="text-balance text-md ">{data.description}</p>
      </div>
    </div>
  );
};

export default BooklistComponents;
