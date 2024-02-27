// pages/_app.js
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../src/app/style.scss';

import type { AppProps } from "next/app";
import Footer from '../components/reusable components/Footer';
import Navbar from '../components/reusable components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
           <Navbar />
      <Component {...pageProps} />
     <Footer />
    </QueryClientProvider>
  )
}

export default MyApp;