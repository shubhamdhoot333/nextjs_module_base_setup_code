
import Image from "next/image";
import React, { useContext, useState } from "react";
function Card({ value }) {
    // console.log("value",value);
    const maxLength = 20;
    const priceOptions = Object.keys(value.price);
    const [size, setSize] = useState(priceOptions[0]);
    const [qty, setQty] = useState(1);
    // const priceOptions = ["Reg","Medium","Large"];
    
    const handleQty = (e) => {
        setQty(e.target.value);
      };
      
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };
  let finalPrice = qty * parseInt(value.price[size]);
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        {/* <Link href={{ pathname: "/Item/[item]" }} as={`Item/${data["_id"]}`}> */}
          <div className="relative w-full h-80">
          <Image src={value?.img} 
                 fill alt="pizza"
                 style={{ objectFit: 'cover' }}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  />
          </div>
          <div className="p-4">
            <div className="font-bold mb-2 text-xl uppercase"> 
            <p className=" text-gray-700 dark:text-gray-400 text-base">
                {value?.name}
            </p>
            </div>
            <p className=" text-gray-700 dark:text-gray-400 text-base">
            {truncateText(value.description, maxLength)}
            </p>
          </div>
        {/* </Link> */}
        <div className="flex px-4 justify-between">
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleSize}
          >
            {priceOptions.map((options) => {
              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex p-4 font-bold  justify-between">
          <button
           className="border dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100  text-gray-700 dark:text-gray-400 "
          >
            Add to cart
          </button>
          <p className="p-2 text-xl  text-gray-700 dark:text-gray-400">₹{finalPrice}/-</p>
        </div>
      </div>
    </div>
  )
}

export default Card