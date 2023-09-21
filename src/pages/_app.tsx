import type { AppProps } from "next/app";
import MainLayout from "@/layout";
// import global styles
import "../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
