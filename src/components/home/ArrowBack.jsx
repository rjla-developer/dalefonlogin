import React, { useState } from "react";

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

function ArrowBack({ setLoginChange, dir }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="cursor-pointer fs-2 me-3 ms-2 mt-2 text-white">
      {isHovered ? (
        <IoArrowBack
          onClick={() => {
            setLoginChange(dir);
            handleMouseLeave();
          }}
          onMouseLeave={handleMouseLeave}
        />
      ) : (
        <IoIosArrowBack onMouseEnter={handleMouseEnter} />
      )}
    </div>
  );
}

export default ArrowBack;
