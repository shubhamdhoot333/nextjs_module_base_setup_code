import { Inter } from "next/font/google";
import CarouselComponent from "@/components/home/CarouselComponent";
import Head from "next/head";
import Card from "@/components/home/Card";
import cardData from "../components/home/cardData.json"
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  let categories = new Set();
  
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
     <CarouselComponent />
     <div className="container mx-auto">
     {
      categoriesArray.map((category,index)=>{
        return(
          <div key={index}>
             <div className=" text-4xl mt-10 mb-3 uppercase font-bold px-20" >
                 { category }
              </div>
              <hr className="my-2" />
              <div className="flex flex-col items-center justify-center">
                <div className=" grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                  {foodData.map((data,index) => {
                      return <Card key={data.id} value={data} />;
                    })}
                </div>
              </div>
           </div>
        ) 
       
      })
     }

     </div>
    

     
    </>
    
  );
}
