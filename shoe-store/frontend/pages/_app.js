import Nprogress from 'nprogress';
import Router from 'next/router';
import { ApolloProvider } from '@apollo/client';
import { CartStateProvider } from '../lib/cartState';
import Layout from '../components/Layout';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => Nprogress.start());
Router.events.on('routeChangeComplete', () => Nprogress.done());
Router.events.on('routeChangeError', () => Nprogress.start());

export function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitalProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
