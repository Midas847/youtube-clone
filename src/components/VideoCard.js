import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.postId}`} state={video}>
      <div className="flex flex-col mb-8">
        <div className="relative h-full md:h-[20rem] md:rounded-xl overflow-hidden">
          <img
            src={video?.submission.thumbnail}
            alt="thumbnails"
            className="h-full w-full object-fill "
          />
        </div>

        <div className="flex text-black dark:text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                src={video?.creator?.pic}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.submission.title}
            </span>

            <span className="text-[12px] font-semibold mt-2 text-black/[0.7] dark:text-white/[0.7] flex items-center">
              {video?.creator?.handle}
            </span>

            <div className="flex text-[12px] font-semibold text-black/[0.7] dark:text-white/[0.7] truncate overflow-hidden">
              <span className="flex text-[24px] text-black/[0.7] dark:text-white/[0.7] font-bold leading-none relative top-[-10px] mx-1">
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

export default VideoCard;
