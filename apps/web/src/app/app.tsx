import { Routes, Route } from 'react-router-dom';
import { Header, Main, Root } from '@pong/layout';
import { Sidebar } from '../components/sidebar';

import { HomePage } from '../pages/home';
import { LogPage } from '../pages/log';
import { LadderPage } from '../pages/ladder';

export function App() {
  return (
    <Root>
      <Sidebar />
      <Header>
        <p>placeholder</p>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ladder" element={<LadderPage />} />
          <Route path="/log" element={<LogPage />} />
        </Routes>
      </Main>
    </Root>
  );
}

export default App;
