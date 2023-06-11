import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-10 bg-neutral-100 p-4 text-md font-semibold text-primary rounded-full">
      <button onClick={() => (count - 1) < 0 ? setCount(0): setCount(count - 1)}>
        <svg
          width="7"
          height="3"
          viewBox="0 0 7 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.20384 0.544034V2.70455H0.233665V0.544034H6.20384Z"
            fill="#3538CD"
          />
        </svg>
      </button>
      {count}
      <button onClick={() => setCount(count + 1)}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.97301 9.29048V0.239346H6.26136V9.29048H3.97301ZM0.591619 5.90909V3.62074H9.64276V5.90909H0.591619Z"
            fill="#3538CD"
          />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
