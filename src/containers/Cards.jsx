import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Cards = () => {
  const [images, setImages] = useState([]);

  const initialPage = parseInt(localStorage.getItem("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_API_KEY
      }&q=${term}&image_type=photo&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [page, term]);

  const myStyles = {
    "background-image":
      "conic-gradient(from 0deg, violet, indigo 30%, blue 50%, green 60%, yellow 70%, orange 80%, red 100%)",
    // otras propiedades de estilo aquí
  };

  useEffect(() => {
    localStorage.setItem("page", page.toString());
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };
  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  // const handleNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  return (
    <div className="container w-full  mx-auto max-lg:px-2">
      {isLoading ? (
        <div className="flex flex-row gap-2 h-screen">
          <div
            style={myStyles}
            className="w-32 h-32 my-8 mx-auto rounded-full bg-radial bg-gradient-to-tr animate-spin [animation-delay:.7s]"
          ></div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 xl:grid-cols-5 max-sm:grid-cols-2 max-lg:grid-cols-3 gap-4 ">
            {images.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
          <div className="my-3 grid grid-cols-3 w-full justify-center items-center">
            <button
              onClick={handlePrevPage}
              className="px-3 py-1 bg-[#25938F] font-bold rounded-xl border-2 border-[#FFDAAD] w-fit place-self-end items-center"
            >
              <svg
                fill="#FFDAAD"
                viewBox="-32 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(-1, 0, 0, 1, 0, 0)"
                className="w-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                </g>
              </svg>
            </button>
            <p className="px-3 bg-[#25938F] text-[#FFDAAD] text-lg font-semibold rounded-2xl border-2 border-[#FFDAAD] max-w-[45px] w-fit place-self-center">
              {page}
            </p>
            <button
              onClick={handleNextPage}
              className="px-3 py-1 bg-[#25938F] font-semibold rounded-xl border-2 border-[#FFDAAD] w-fit place-self-start"
            >
              <svg
                fill="#FFDAAD"
                viewBox="-32 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)"
                className="w-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
