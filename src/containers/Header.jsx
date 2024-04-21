import { useState } from "react";
import Searchbar from "../components/Searchbar";
import ToogleTheme from "../components/ToogleTheme";

const Header = ({ term, setTerm }) => {
  const [logo, setLogo] = useState(
    document.querySelector("html").classList.contains("dark")
      ? "/img/Logo2.jpg"
      : "/img/Logo3.jpg"
  );

  const handleChangeLogo = (newValue) => {
    setLogo(newValue);
  };

  const handleChangeTerm = (e) => {
    console.log();
    setTerm(e);
  };

  return (
    <header className="py-2 md:py-3 px-4 mb-2 bg-dark_cyan dark:bg-berkeley_blue sticky top-0 z-10 ">
      <div className="container mx-auto flex flex-col  justify-between md:grid grid-cols-3 gap-2 grid-flow-col items-center">
        <img
          src={logo}
          alt="App logo"
          width={300}
          className="mx-auto items-center px-2 rounded"
        />
        <Searchbar handleChangeTerm={handleChangeTerm} />

        <ToogleTheme logo={logo} handleChangeLogo={handleChangeLogo} />
      </div>
    </header>
  );
};

export default Header;
