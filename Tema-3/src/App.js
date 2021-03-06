import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Exercitiu1 from "./components/Exercitii/Exercitiu1";
import Exercitiu2 from "./components/Exercitii/Exercitiu2";
import Exercitiu3 from "./components/Exercitii/Exercitiu3";
import Exercitiu4 from "./components/Exercitii/Exercitiu4";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <Exercitiu1 />
            <br />
            <Exercitiu2 /> <br />
            <Exercitiu3 /> <br />
            <Exercitiu4 />
            <br />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
