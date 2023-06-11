import HeaderSection from "./Sections/HeaderSection";
import ProductSection from "./Sections/ProductSection";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <header>
        <HeaderSection />
      </header>
      <main>
        <ProductSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
