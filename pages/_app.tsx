// pages/_app.tsx
import '../globals.css'; // Adjust the path if necessary
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;