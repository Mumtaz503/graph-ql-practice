import "@/styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
import Info from "../../Components/Info";

export default function App({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <Info />
      <Component {...pageProps} />
      </NotificationProvider>
    </MoralisProvider>
  
  );
}
