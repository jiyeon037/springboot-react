import React from 'react';
import AppRouter from './Components/route/RouterComponent';
import NavBar from "./Components/route/NavBar";

import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;