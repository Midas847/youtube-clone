import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { abbreviateNumber } from "js-abbreviation-number";
import { useLocation } from "react-router-dom";
import { DataContext } from "../context/ContextApi";
import SuggestedVideoCard from "../components/SuggestedVideoCard";

const Video = () => {
  const location = useLocation();
  const { state } = location;
  // console.log(state);
  const { videos } = useContext(DataContext);
  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] bg-white dark:bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row ">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={state.submission.mediaUrl}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          <div className="text-black dark:text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {state.submission.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    src={state?.creator?.pic}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col ml-3">
                <div className="text-black dark:text-white text-base font-semibold flex items-center">
                  {state?.creator?.handle}
                </div>

                <div className="text-black/[0.7] dark:text-white/[0.7] text-sm">
                  1000 subscribers
                </div>
              </div>

              <div className="ml-5">
                <a
                  href="/"
                  class="inline-flex items-center py-2 px-4 bg-black hover:bg-gray-800 focus:ring-2 focus:ring-black focus:ring-offset-2 text-white rounded-full transition duration-300"
                >
                  <svg class="w-8 h-8 fill-current mr-2" viewBox="0 0 24 24">
                    <path d="M21.9 5.9c-.2-.7-.7-1.2-1.4-1.4C18.3 4 12 4 12 4s-6.3 0-8.5.5c-.7.2-1.2.7-1.4 1.4C2 8.1 2 12 2 12s0 3.9.5 5.1c.2.7.7 1.2 1.4 1.4 2.2.5 8.5.5 8.5.5s6.3 0 8.5-.5c.7-.2 1.2-.7 1.4-1.4.5-1.2.5-5.1.5-5.1s0-3.9-.5-5.1zM9.5 15.5V8.5l6.5 3z" />
                  </svg>
                  <span>Subscribe Now</span>
                </a>
              </div>
            </div>

            <div className="flex text-black dark:text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/[0.15] dark:bg-white/[0.15]">
                <AiFillLike className="text-xl text-black dark:text-white mr-2" />
                <span>{`${abbreviateNumber(
                  state?.reaction?.count,
                  2
                )} Likes`}</span>
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/[0.15] dark:bg-white/[0.15] ml-4">
                <FaEye className="text-xl text-black dark:text-white mr-2" />
                <span>{`${abbreviateNumber(100, 2)} Views`}</span>
              </div>
            </div>
          </div>
          <div className="p-5 bg-[#f2f2f2] rounded-lg mt-10 dark:text-white dark:bg-[#272727]">
            <h2 className="font-bold">Description :</h2>
            <p>{state?.submission?.description}</p>
          </div>
          <div className="mt-5">
            <h2>{state?.comment.count} Comments</h2>
          </div>
        </div>

        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {videos.map((item, index) => {
            return <SuggestedVideoCard key={index} video={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Video;
