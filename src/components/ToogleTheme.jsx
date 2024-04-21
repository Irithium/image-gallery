import { useEffect, useState } from "react";

const ToogleTheme = ({ logo, handleChangeLogo }) => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    const newValue = document.querySelector("html").classList.contains("dark")
      ? "/img/Logo2.jpg"
      : "/img/Logo3.jpg";
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    handleChangeLogo(newValue);
  };

  return (
    <button
      className="mx-auto l transition w-fit rounded-full items-center mb-2 md:mb-2"
      onClick={handleChangeTheme}
    >
      {theme === "light" ? (
        <svg
          width="45px"
          height="45px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-md:w-[35px] max-md:h-[35px]"
          name="Sun"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="12"
              cy="12"
              r="6"
              stroke="#2e2f2f"
              strokeWidth="1.5"
            ></circle>{" "}
            <path
              d="M12 2V3"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M12 21V22"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M22 12L21 12"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M3 12L2 12"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M19.0708 4.92969L18.678 5.32252"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M5.32178 18.6777L4.92894 19.0706"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M19.0708 19.0703L18.678 18.6775"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M5.32178 5.32227L4.92894 4.92943"
              stroke="#2e2f2f"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
      ) : (
        <svg
          width="45px"
          height="45px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#CB9CF2"
          className="max-md:w-[35px] max-md:h-[35px]  stroke-wisteria-500 white00"
          name="Moon"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
              stroke="#476085"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      )}
    </button>
  );
};

export default ToogleTheme;
