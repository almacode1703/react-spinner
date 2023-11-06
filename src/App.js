import "./App.css";
import Spinner from "./components/Spinner";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import NewProducts from "./pages/NewProducts";
import OldProducts from "./pages/OldProducts";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="home" />
        <Route element={<About />} path="about" />
        <Route element={<Career />} path="career" />
        <Route element={<Contacts />} path="contacts"/>
        <Route element={<ErrorPage/>} path="*"/>
        <Route element={<Products />} path="products">
          <Route element={<NewProducts/>} path="/products" />
          <Route element={<NewProducts/>} path="newproducts" />
          <Route element={<OldProducts/>} path="oldproducts" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
