import "@/styles/globals.css";
import useRemLayout from "@/utils/useRemLayout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useRemLayout();
  return <Component {...pageProps} />;
}
