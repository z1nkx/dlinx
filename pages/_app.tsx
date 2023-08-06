// _app.js or _app.tsx
import { ThirdwebProvider, paperWallet } from "@thirdweb-dev/react";
import { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Add this line to import Font Awesome styles
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
        paperWallet({
          paperClientId: "e61ecffc-57d8-463c-9247-0131893733c7",
        })
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
