// pages/_app.js
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { wrapper } from '@/redux/store';

import '@/styles/globals.css';

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        
          <Component {...props.pageProps} />
        
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
