import "./App.css";
import Logo from "./assets/logo.svg";
import CoverMobile from "./assets/hero-mobile.jpg"
import CoverDesktop from "./assets/hero-desktop.jpg"
import Hero from "./components/Hero";
import EmailInput from "./components/EmailInput";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main-content">
        <img
          src={Logo}
          alt="Base Apparel logo"
          className="main-content__logo"
          aria-label="Base Apperal logo"
        />
        <picture className="main-content__cover">
          <source srcSet={CoverDesktop} media="(min-width: 1024px)" />
          <img src={CoverMobile} alt="" aria-hidden="true" className="main-content__mobile-cover" />
        </picture>
        <Hero />
        <EmailInput />
      </main>
      <Footer />
    </>
  );
}

export default App;
