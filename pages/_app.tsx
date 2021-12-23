import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import Upset from "../components/Upset";

function MyApp({ Component, pageProps, router }: AppProps) {
  
  const [option, setOption] = useState<string | null>(null)

  useEffect(() => {
    if (window) {
      const storage = sessionStorage
      console.log('sfsdf', storage.getItem('choice'))
      setOption(window.sessionStorage.getItem('choice'))
    }
  }, [])
  
  return (
    <>
      {
        option !== 'wrong' && (
          <Layout>
            <Component setIsSorry={setOption} {...pageProps} key={router.route} />
          </Layout>
        )
      }
      {
        option === 'wrong' && (
          <Upset setIsSorry={setOption}/>
        )
      }
    </>
  );
}

export default MyApp;
