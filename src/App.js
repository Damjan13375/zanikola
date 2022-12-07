import {
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter as Router,
} from "react-router-dom";
import Calculate from "./pages/Calculate";
import HomePage from "./pages/Home";
import { ChakraProvider } from '@chakra-ui/react'

import Login from "./pages/Login";

function App() {
  const user = true;
console.log(user)
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/income" element={<Login />} />
          <Route path="/expenses" element={<Login />} />
          <Route path="/finishing-up" element={<Login />} />
          <Route path="/wizzard" element={<Login />} />
          {user && <Route path="/calculate" element={<Calculate />} />}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
