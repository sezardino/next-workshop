import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-slate-500 min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}
