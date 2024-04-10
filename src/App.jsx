import Cards from "./containers/Cards";
import Header from "./containers/Header";
import Footer from "./containers/Footer.jsx";

function App() {
  return (
    <main className="text-center flex justify-center mx-auto pb-2 bg-[#2E2F2F] flex-col ">
      <Header />
      <Cards />
      <Footer />
    </main>
  );
}

export default App;
