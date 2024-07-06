import { Inter } from "next/font/google";
import { useState } from "react";
import CarouselComponent from "@/components/home/CarouselComponent";
import Head from "next/head";
import Card from "@/components/home/Card";
import cardData from "../components/home/cardData.json"
import { useEffect } from "react";
import Layout from "@/components/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  let categories = new Set();
  const [typeFilter, setTypeFilter] = useState(false);
  
  const foodData=[];
  const handleData = ()=>{
    cardData.map((data)=>{
    
     return foodData.push(data),categories.add(data?.category);
    })
   
  }
    handleData();
    const categoriesArray =[...categories]; 
     return (
    <>
    <Head>
        <title>PizzaWizza</title>
    </Head>
    <Layout>
    <CarouselComponent />
     <div className="container mx-auto">
        <div className="my-6 space-x-5 px-20">
          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              !typeFilter && "bg-slate-300 dark:bg-slate-600"
            } `}
            onClick={() => setTypeFilter(false)}
          >
            All
          </button>
          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Veg" && "bg-slate-300 dark:bg-slate-600"
            } `}
            onClick={() => {
              setTypeFilter("Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500"
              }
            >
              ●
            </span>
            Veg
          </button>
          <button
            className={`border-black rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Non-Veg" && "bg-slate-300 dark:bg-slate-600"
            } `}
            onClick={() => {
              setTypeFilter("Non-Veg");
            }}
          >
            <span
              className={
                "lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500"
              }
            >
              ●
            </span>
            Non Veg
          </button>
        </div>
     {
      categoriesArray.map((category,index)=>{
        return(
          <div key={index}>
             <div className=" text-4xl mt-10 mb-3 uppercase font-bold px-20" >
                 { category }
              </div>
              <hr className="my-2  border-black border-2"  />
              <div className="flex flex-col items-center justify-center">
                <div className=" grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {foodData?.filter((foodData) =>
                      typeFilter ? typeFilter === foodData.foodType : foodData
                    )
                    ?.map((data,index) => {
                      return <Card key={data.id} value={data} />;
                    })}
                </div>
              </div>
           </div>
        ) 
       
      })
     }

     </div>
    
    </Layout>
  

     
    </>
    
  );
}
