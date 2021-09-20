import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/main-content/MainContent";

function App() {
  return (
    <div className="">
      <header>
        <Header />
        <Banner />
      </header>
      <main className="container">
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
