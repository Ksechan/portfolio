import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Home from '@/pages/Home';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './theme/theme';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
