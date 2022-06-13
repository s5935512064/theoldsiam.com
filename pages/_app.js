import '../styles/globals.css'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
// import Cookies from "../components/Cookies";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "@fancyapps/ui/dist/fancybox.css";

function MyApp({ Component, pageProps }) {

  const { pathname } = useRouter();

  const router = useRouter();




  useEffect(() => {

    window.scrollTo(0, 0);

  }, [pathname]);


  // useEffect(() => {
  //   AOS.init({
  //     once: true,
  //     duration: 1400,
  //   });
  // }, []);

  return (
    <>

      <AnimatePresence
        exitBeforeEnter
        initial={false}

      >
        <Component {...pageProps} />
      </AnimatePresence>
      {/* <Cookies /> */}
    </>

  );

}

export default MyApp