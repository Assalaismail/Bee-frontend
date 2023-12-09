import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../src/Pages/layout.jsx";
import Home from './Pages/Home/home.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
