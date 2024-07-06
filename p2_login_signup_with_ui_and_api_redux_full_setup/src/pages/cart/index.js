import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removetocarddata,addQtyToCart,decreaseQuantity  } from "@/redux/slices/addtocardSlice";
import Layout from '@/components/layouts/Layout';
function index() {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const cartData = useSelector((state) => state.addtocard.value);
  const totalPrice = cartData.reduce((acc, item) => acc + parseInt(item.finalPrice), 0);
  console.log("totalPrice",cartData);
  const handleRemoveToCart = async (id) => {
     dispatch(removetocarddata(id));
  };

  const handleAddQtyToCart = async (id) => {
     dispatch(addQtyToCart(id));
 };
 const handleRemoveQtyToCart = async (id) => {
     dispatch(decreaseQuantity(id));
};
  
  return (
    <>
    <Layout>
    <div style={{ minHeight: "95vh" }} className="flex items-center ">
      <div className="container mx-auto flex border-gradient p-3 pb-10 m-10  rounded-lg flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {cartData.length > 0 ? (
                <>
                  <table className="min-w-full text-left text-lg font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4 ">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4 ">
                          <div className="flex items-center">
                            Item name
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mx-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                              />
                            </svg>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-4 ">
                          <div className="flex items-center">
                            Size
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 mx-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                              />
                            </svg>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-4 ">
                          <div className="flex items-center">
                            Quantity
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mx-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                              />
                            </svg>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-4  ">
                          <div className="flex items-center">
                            Price
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 mx-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-4 "></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.map((data, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b dark:border-neutral-500"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {data.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              {data.size}
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">
                              <div className="  flex flex-row  ">
                              <button 
                               onClick={() => {
                                handleAddQtyToCart(data.id);
                              }}>
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 hover:cursor-pointer hover:scale-125 mx-3 h-6 hover:text-green-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                              </svg>
                              </button>
                                {data.qty}
                               <button  
                               onClick={() => {
                                        handleRemoveQtyToCart(data.id);
                                  }}>
                                <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 mx-3 h-6 hover:cursor-pointer hover:scale-125 hover:text-red-500"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg> 
                                </button>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              ₹{data.finalPrice}/-
                            </td>
                            {/* delete option */}
                            <td
                              className="cursor-pointer whitespace-nowrap px-2 py-2 hover:text-red-500"
                              >
                                  <button
                                    onClick={() => handleRemoveToCart(data.id) }
                                  >
                                      <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                                  </button>
                              
                              </td>
                           
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div>
                      <h1 className="font-bold my-2">
                       Total Price: {totalPrice}/-
                      </h1>
                    </div>
                </>
              ) : (
                <div className="font-semi text-center text-4xl">
                  Your cart is empty 😕{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
   
  </>
  )
}

export default index