import { useState } from "react";
import SearchContext from "./SearchContext";

const Searchbar = () => {
  const [text, setText] = useState("hello");

  return (
    <SearchContext.Provider value={text}>
      <div className="flex items-center md:m-4 my-4 max-md:h-[20px] w-full flex-grow justify-center">
        <div
          className="rounded-lg
        "
        >
          <div className="flex ">
            <div className="flex w-10 max-md:w-5 max-md:p-4 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-300 dark:border-rich_black-700 bg-cream-800 p-5 dark:bg-ultra_violet-600">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-ash_gray-300 transition dark:fill-"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              className="w-full min-w-[50px]  2xl:text-xl xl:p-2 max-md:text-xs bg-cream-800 dark:bg-ultra_violet-600 dark:text-cream-800 dark:placeholder-gray-300 pl-2 text-base font-semibold outline-0"
              placeholder="Searching for..."
              id=""
            />
            <input
              type="button"
              value="Search"
              className="bg-ash_gray-300 active:bg-ash_gray-300 hover:bg-ash_gray-400 dark:bg-yinmn_blue-600 dark:hover:bg-yinmn_blue dark:active:bg-yinmn_blue-400  text-[#FBFFEB] p-2 rounded-tr-lg max-md:text-xs xl:p-3 xl:text-xl rounded-br-lg font-semibold  transition-colors"
            />
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Searchbar;
