import React from "react";

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div className="prev__arrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={6}
          height={12}
          viewBox="0 0 6 12"
          fill="none"
        >
          <path
            d="M4.87497 11C4.87497 11 1.12501 7.31756 1.125 5.99996C1.12499 4.68237 4.875 1 4.875 1"
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

export default PrevArrow;
