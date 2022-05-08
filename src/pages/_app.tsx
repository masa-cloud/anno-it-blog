import "../styles/globals.css";
import React from 'react';
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto max-w-prose">
      <header className="py-8 border-b border-gray-300">
        <h1>
          <Link href="/"><a className="text-4xl font-bold">annoのITブログ</a></Link>
        </h1>
      </header>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
