import Cards from "./containers/Cards";
import Header from "./containers/Header";
import Footer from "./containers/Footer.jsx";
import { useState } from "react";

function App() {
  const [term, setTerm] = useState("");

  const handleCleanTerm = () => {
    setTerm("");
  };

  return (
    <main className="text-center flex justify-center mx-auto pb-2 bg-jet dark:bg-rich_black flex-col ">
      <Header term={term} setTerm={setTerm} />
      <Cards term={term} handleCleanTerm={handleCleanTerm} />
      <Footer />
    </main>
  );
}

export default App;
