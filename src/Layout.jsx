import React from "react";
import Animation from "./Animation";
function Layout({ children }) {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-2 h-full">
        {children}
        <Animation></Animation>
      </div>
    </div>
  );
}

export default Layout;
