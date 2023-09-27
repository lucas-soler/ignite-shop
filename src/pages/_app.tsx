import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";

import Image from "next/future/image";
import Link from "next/link";
import { CartProvider } from "use-shopping-cart";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_SECRET_KEY}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency="BRL"
      allowedCountries={["BR"]}
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
