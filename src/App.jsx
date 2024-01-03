import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PreviousEvents from "./pages/PreviousEvents";
import Header from "./layout/Header/index";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Header/>
        <div className="flex-1">
          <Home/>
          <About/>
          <PreviousEvents/>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
