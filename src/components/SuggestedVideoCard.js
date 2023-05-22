import React from "react";
import { Link } from "react-router-dom";

const SuggestedVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.postId}`} state={video}>
      <div className="flex mb-4">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            src={video?.submission.thumbnail}
            alt="thumbnails"
            className="h-full w-full object-fill "
          />
        </div>

        <div className="flex text-black dark:text-white mt-3">
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2 lg:text-sm xl:text-sm ">
              {video?.submission.title}
            </span>

            <span className="text-[12px] font-bold dark:font-semibold mt-2 text-black/[0.8] dark:text-white/[0.7] flex items-center lg:text-[12px] xl:text-[12px]">
              {video?.creator?.handle}
            </span>

            <div className="flex text-[12px] font-semibold text-black/[0.8] dark:text-white/[0.7] truncate overflow-hidden lg:text-[12px] xl:text-[12px]">
              <span className="flex text-[24px] text-black/[0.8] dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">24</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestedVideoCard;
