import "./output.css";
import LandingPage from "./pages/Landing-Page/LandingPage";
import { Routes, Route } from "react-router-dom";
import Account from "./pages/Account/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes/>
      <Footer />
    </>
  );
}

export default App;
