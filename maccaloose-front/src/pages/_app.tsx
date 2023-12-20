import type { AppProps } from "next/app";
import * as Css from "@/module/css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Css.ResetCss />
      <Css.GlobalCss />
      <Component {...pageProps} />
    </>
  );
}
