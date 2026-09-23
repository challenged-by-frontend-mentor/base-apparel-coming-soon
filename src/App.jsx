import "./App.css";
import Logo from "./assets/logo.svg";
import CoverMobile from "./assets/hero-mobile.jpg";
import CoverDesktop from "./assets/hero-desktop.jpg";
import Hero from "./components/Hero";
import EmailInput from "./components/EmailInput";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <img
        src={Logo}
        alt="Base Apparel logo"
        className="page-content__logo"
      />
      <picture className="page-content__cover">
        <source srcSet={CoverDesktop} media="(min-width: 1024px)" />
        <img
          src={CoverMobile}
          alt=""
          aria-hidden="true"
          className="page-content__cover-image"
        />
      </picture>
      <main className="main-content">
        <Hero />
        <EmailInput />
      </main>
      <Footer />
    </>
  );
}

export default App;
