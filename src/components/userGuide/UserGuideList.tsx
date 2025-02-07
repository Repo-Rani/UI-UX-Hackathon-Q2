import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { UserGuideListProps } from "../../../types/type";
const UserGuideList: React.FC<UserGuideListProps> = ({
  guides,
  onGuideClick,
}) => {
  return (
    <>
     
      <div className="user-guide-list">
        {" "}
        <h1 className="text-center text-3xl font-bold tracking-wide text-gray-800 mb-6 font-helvetica">
          User Guides
        </h1>
        <div className="flex justify-center w-full">
          <ul className="flex flex-col justify-center gap-4 w-full max-w-md">
            {guides &&
              guides.map((guide) => (
                <div
                  className="guide-item flex justify-between items-center px-6 py-3 bg-gray-200 bg-opacity-20 hover:bg-opacity-30 cursor-pointer transition-all duration-200 ease-in-out"
                  key={guide.slug.current}
                  onClick={() => onGuideClick(guide)}
                >
                  <li className="text-gray-800 font-medium font-satoshi">
                    {guide.title}
                  </li>
                  <MdArrowOutward className="h-5 w-5 text-black/70" />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserGuideList;