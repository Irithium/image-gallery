import React from "react";

{
  /* <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
  <svg
    class="w-6 h-6 fill-neutral-50"
    height="100"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    width="100"
    x="0"
    xmlns="http://www.w3.org/2000/svg"
    y="0"
  >
    <path
      class="svg-fill-primary"
      d="M50,1.23A50,50,0,0,0,34.2,98.68c2.5.46,3.41-1.09,3.41-2.41s0-4.33-.07-8.5c-13.91,3-16.84-6.71-16.84-6.71-2.28-5.77-5.55-7.31-5.55-7.31-4.54-3.1.34-3,.34-3,5,.35,7.66,5.15,7.66,5.15C27.61,83.5,34.85,81.3,37.7,80a10.72,10.72,0,0,1,3.17-6.69C29.77,72.07,18.1,67.78,18.1,48.62A19.34,19.34,0,0,1,23.25,35.2c-.52-1.26-2.23-6.34.49-13.23,0,0,4.19-1.34,13.75,5.13a47.18,47.18,0,0,1,25,0C72.07,20.63,76.26,22,76.26,22c2.72,6.89,1,12,.49,13.23a19.28,19.28,0,0,1,5.14,13.42c0,19.21-11.69,23.44-22.83,24.67,1.8,1.55,3.4,4.6,3.4,9.26,0,6.69-.06,12.08-.06,13.72,0,1.34.9,2.89,3.44,2.4A50,50,0,0,0,50,1.23Z"
    ></path>
  </svg>
  Github
</button>; */
}

const Header = () => {
  return (
    <header className="py-4 px-4 mb-2 bg-[#25938F] sticky top-0 z-10 grid grid-cols-3 gap-4 grid-flow-col items-center">
      <img
        src="/img/Logo2.jpg"
        alt="App logo"
        width={300}
        className="mx-auto "
      />

      <div className="flex items-center mx-auto md:p-5 max-md:h-[20px] w-full ">
        <div
          className="rounded-lg
        "
        >
          <div className="flex">
            <div className="flex w-10 max-md:w-5 max-md:p-4 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full min-w-[50px] max-w-[200px] bg-white pl-2 text-base font-semibold outline-0"
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="Search"
              className="bg-blue-500 p-2 rounded-tr-lg max-md:text-xs rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
            />
          </div>
        </div>
      </div>

      <button className="px-2 py-1 bg-teal-400 border border-white w-1/2 mx-auto">
        Theme
      </button>
    </header>
  );
};

export default Header;
