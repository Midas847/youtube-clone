import React, { useContext, useState } from "react";
import LeftNav from "../components/leftNav";
import { DataContext } from "../context/ContextApi";
import VideoCard from "../components/VideoCard";
import ShimmerVideoCard from "../components/ShimmerVideoCard";

const Home = () => {
  const pageNumberLimit = 3;
  // console.log(useContext(DataContext));
  const { loading, videos, setPageNumber, pageNumber } =
    useContext(DataContext);
  const pages = [];
  const [minPageLimit, setminPageLimit] = useState(0);
  const [maxPageLimit, setmaxPageLimit] = useState(3);
  for (let i = 1; i <= 9; i++) {
    pages.push(i);
  }
  const handlePrevClick = () => {
    if (pageNumber - 1 >= 0) {
      setPageNumber(pageNumber - 1);
    }
    if ((pageNumber - 1) % pageNumberLimit === 0) {
      setmaxPageLimit(maxPageLimit - pageNumberLimit);
      setminPageLimit(minPageLimit - pageNumberLimit);
    }
  };

  const handleNextClick = () => {
    if (pageNumber + 1 <= 9) setPageNumber(pageNumber + 1);
    if (pageNumber + 1 > maxPageLimit) {
      setmaxPageLimit(maxPageLimit + pageNumberLimit);
      setminPageLimit(minPageLimit + pageNumberLimit);
    }
  };

  const handlePageClick = (e) => {
    // props.onPageChange(Number(e.target.id));
    setPageNumber(Number(e.target.id));
  };

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page >= minPageLimit) {
      return (
        <li
          key={page}
          id={page}
          onClick={handlePageClick}
          className={
            pageNumber === page
              ? "h-10 px-5 py-2 text-white transition-colors duration-150 bg-red-600 border border-r-0 border-red-600 focus:shadow-outline"
              : "h-10 px-5 py-2 text-red-600 transition-colors duration-150 focus:shadow-outline hover:bg-red-100 cursor-pointer"
          }
        >
          {page}
        </li>
      );
    } else {
      return null;
    }
  });

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li className="mt-1" onClick={handleNextClick}>
        . . .
      </li>
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <li className="mt-1" onClick={handlePrevClick}>
        . . .
      </li>
    );
  }

  return (
    <>
      <div className="flex h-[calc(100%-56px)] dark:bg-black">
        <LeftNav />
        {
          <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white dark:bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
              {loading
                ? Array(24)
                    .fill("")
                    .map((e, index) => {
                      return <ShimmerVideoCard key={index} />;
                    })
                : videos.map((item, index) => {
                    return <VideoCard key={index} video={item} />;
                  })}
            </div>
          </div>
        }
      </div>
      <nav
        aria-label="Page navigation"
        className="flex pt-5 pb-5 align-center justify-center dark:bg-black"
      >
        <ul class="inline-flex">
          <li>
            <button
              class="h-10 px-5 text-red-600 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-red-100"
              onClick={handlePrevClick}
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          {pageDecremenEllipses}
          {pageNumbers}
          {pageIncrementEllipses}
          <li>
            <button
              class="h-10 px-5 text-red-600 transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-red-100"
              onClick={handleNextClick}
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
