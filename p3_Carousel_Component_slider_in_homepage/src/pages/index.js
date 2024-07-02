import { Inter } from "next/font/google";
import CarouselComponent from "@/components/home/CarouselComponent";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
    <Head>
        <title>PizzaWizza</title>
    </Head>
     <CarouselComponent />
    </>
    
  );
}
