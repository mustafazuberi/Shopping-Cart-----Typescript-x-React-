import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ShoppingCartProvider>
      <div style={{ minWidth: "100%" }}>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Container>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
