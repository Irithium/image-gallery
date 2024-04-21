const Card = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm rounded-xl overflow-hidden h-[390px] max-md:h-[370px] shadow-lg bg-[#FBFFEB] dark:bg-ultra_violet-500 ">
      <img
        src={image.webformatURL}
        alt="image"
        className="w-full md:h-48 h-32"
      />
      <div className="px-4 py-3">
        <div className="font-bold text-dark_cyan dark:text-yinmn_blue-400 max-md:text-base text-lg 2xl:text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className="flex items-center pt-1 justify-between max-sm:justify-center">
          <li>
            <div className="flex items-center justify-center rounded-full ">
              <svg
                fill="#25938F"
                viewBox="-3.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#A2B9AD"
                className="max-sm:w-4 max-md:w-5 w-6 dark:fill-yinmn_blue-400 dark:stroke-yinmn_blue-400"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>view</title>{" "}
                  <path d="M12.406 13.844c1.188 0 2.156 0.969 2.156 2.156s-0.969 2.125-2.156 2.125-2.125-0.938-2.125-2.125 0.938-2.156 2.125-2.156zM12.406 8.531c7.063 0 12.156 6.625 12.156 6.625 0.344 0.438 0.344 1.219 0 1.656 0 0-5.094 6.625-12.156 6.625s-12.156-6.625-12.156-6.625c-0.344-0.438-0.344-1.219 0-1.656 0 0 5.094-6.625 12.156-6.625zM12.406 21.344c2.938 0 5.344-2.406 5.344-5.344s-2.406-5.344-5.344-5.344-5.344 2.406-5.344 5.344 2.406 5.344 5.344 5.344z"></path>{" "}
                </g>
              </svg>{" "}
              <p className="px-1 text-jet-400 dark:text-yinmn_blue-200 max-lg:pl-0 text-sm max-sm:text-xs md:font-semibold">
                {image.views}
              </p>
            </div>
          </li>
          <li>
            {" "}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="#25938F"
                xmlns="http://www.w3.org/2000/svg"
                className="max-sm:w-4 max-md:w-5 w-6 dark:fill-yinmn_blue-400   
                dark:stroke-yinmn_blue-400"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z"
                    fill="#25938F"
                    className="dark:fill-yinmn_blue-400 
                dark:stroke-yinmn_blue-400"
                  ></path>
                </g>
              </svg>{" "}
              <p className="px-1 text-jet-400 dark:text-yinmn_blue-200 max-lg:pl-0 text-sm max-sm:text-xs md:font-semibold">
                {image.likes}
              </p>{" "}
            </div>
          </li>
          <li>
            {" "}
            <div className="flex items-center justify-center ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#949494"
                strokeWidth="0.00024000000000000003"
                className="max-sm:w-4 max-md:w-5 w-6 dark:fill-yinmn_blue-400   
                dark:stroke-yinmn_blue-400"
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
                    d="M15.3223 12.1391C14.9082 12.1312 14.5661 12.4606 14.5582 12.8747C14.5503 13.2889 14.8796 13.631 15.2938 13.6389L15.3223 12.1391ZM18.5256 16.313L17.7756 16.2996V16.313H18.5256ZM18.5256 16.576H17.7754L17.7757 16.5894L18.5256 16.576ZM15.3081 20V20.75C15.3128 20.75 15.3176 20.75 15.3223 20.7499L15.3081 20ZM8.09306 20L8.07878 20.7499C8.08354 20.75 8.0883 20.75 8.09306 20.75L8.09306 20ZM4.87556 16.576L5.62556 16.5894V16.576H4.87556ZM4.87556 16.313H5.62568L5.62544 16.2996L4.87556 16.313ZM8.10734 13.6389C8.52148 13.631 8.85081 13.2889 8.84293 12.8747C8.83504 12.4606 8.49292 12.1312 8.07878 12.1391L8.10734 13.6389ZM14.3147 16.1324C14.633 15.8673 14.6762 15.3944 14.4112 15.0761C14.1462 14.7578 13.6733 14.7146 13.3549 14.9796L14.3147 16.1324ZM11.2207 16.7566C10.9023 17.0217 10.8592 17.4946 11.1242 17.8129C11.3892 18.1312 11.8621 18.1744 12.1805 17.9094L11.2207 16.7566ZM11.2204 17.9092C11.5386 18.1743 12.0115 18.1314 12.2767 17.8131C12.5419 17.4949 12.4989 17.022 12.1807 16.7568L11.2204 17.9092ZM10.0484 14.9798C9.73018 14.7147 9.25726 14.7576 8.99208 15.0759C8.7269 15.3941 8.76988 15.867 9.08809 16.1322L10.0484 14.9798ZM10.9506 17.333C10.9506 17.7472 11.2863 18.083 11.7006 18.083C12.1148 18.083 12.4506 17.7472 12.4506 17.333H10.9506ZM12.4506 4C12.4506 3.58579 12.1148 3.25 11.7006 3.25C11.2863 3.25 10.9506 3.58579 10.9506 4H12.4506ZM15.2938 13.6389C16.6725 13.6651 17.8018 14.8388 17.7757 16.2996L19.2754 16.3264C19.3157 14.0739 17.5641 12.1818 15.3223 12.1391L15.2938 13.6389ZM17.7756 16.313V16.576H19.2756V16.313H17.7756ZM17.7757 16.5894C17.8018 18.0502 16.6725 19.2239 15.2938 19.2501L15.3223 20.7499C17.5641 20.7072 19.3157 18.8151 19.2754 16.5626L17.7757 16.5894ZM15.3081 19.25H8.09306V20.75H15.3081V19.25ZM8.10734 19.2501C6.72861 19.2239 5.59936 18.0502 5.62544 16.5894L4.12568 16.5626C4.08546 18.8151 5.83699 20.7072 8.07878 20.7499L8.10734 19.2501ZM5.62556 16.576V16.313H4.12556V16.576H5.62556ZM5.62544 16.2996C5.59936 14.8388 6.72861 13.6651 8.10734 13.6389L8.07878 12.1391C5.83699 12.1818 4.08546 14.0739 4.12568 16.3264L5.62544 16.2996ZM13.3549 14.9796L11.2207 16.7566L12.1805 17.9094L14.3147 16.1324L13.3549 14.9796ZM12.1807 16.7568L10.0484 14.9798L9.08809 16.1322L11.2204 17.9092L12.1807 16.7568ZM12.4506 17.333V4H10.9506V17.333H12.4506Z"
                    fill="#25938F"
                    className="dark:fill-yinmn_blue-400  
                dark:stroke-yinmn_blue-400"
                  ></path>{" "}
                </g>
              </svg>{" "}
              <p className="px-1 text-jet-400 dark:text-yinmn_blue-200 max-lg:pl-0  text-sm max-sm:text-xs md:font-semibold">
                {image.downloads}
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-3 py-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="capitalize inline-block bg-[#F3FFC2] rounded-full px-2 py-1 text-xs font-semibold text-jet-400 dark:text-yinmn_blue-800 dark:bg-ultra_violet-400 mr-2 my-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
