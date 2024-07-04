import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from 'next-themes'
import { wrapper } from "@/redux/store";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <Layout>
           <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
  );
  
}
export default wrapper.withRedux(App);