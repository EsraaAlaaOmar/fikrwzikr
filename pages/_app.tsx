// pages/_app.js
import React from 'react';

import '../src/app/style.scss';

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {

  return (
  
      <Component {...pageProps} />
     
    
  )
}

export default MyApp;