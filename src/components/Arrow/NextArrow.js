import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <>
      <div className="next__arrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={6}
          height={12}
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            d="M1.12503 1C1.12503 1 4.87499 4.68244 4.875 6.00004C4.87501 7.31763 1.125 11 1.125 11"
            stroke="#EEEBF2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default NextArrow;
