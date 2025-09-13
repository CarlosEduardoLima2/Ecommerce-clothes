
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ProductProvider } from './store/context/ProductProvider';
import { theme } from './styles/theme';
import { Header } from './Component/Header';
// import { Footer } from './components/Footer';
import { GlobalStyles } from './styles/global-styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <ProductProvider>
      <BrowserRouter>
      <Header />
        <App />
        {/* <Footer /> */}
      </BrowserRouter>
    </ProductProvider>
  </ThemeProvider>
);