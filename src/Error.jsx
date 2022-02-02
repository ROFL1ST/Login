import React from "react";

function Error({ children }) {
  return (
    <div>
      <p className="text-sm text-purple-500 font-bold capitalize -pt-5">{children}</p>
    </div>
  );
}

export default Error;
