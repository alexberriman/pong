import { Routes, Route } from 'react-router-dom';
import { Header, Main, Root } from '@pong/layout';
import { Sidebar } from '../components/sidebar';

import { HomePage } from '../pages/home';
import { LogPage } from '../pages/log';

export function App() {
  return (
    <Root>
      <Sidebar />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<LogPage />} />
        </Routes>
      </Main>
    </Root>
  );
}

export default App;
