import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import Home from '@/pages/Home';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/theme/theme';
import ProjectPage from '@/pages/ProjectPage';
import MyPage from '@/pages/MyPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/mypage" element={<MyPage />} />
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
