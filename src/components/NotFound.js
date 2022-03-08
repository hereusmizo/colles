import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 700,
      }}
    >
      <img alt="404 Not Found" src="/404.png" style={{ height: 400 }} />
    </div>
  );
};

export default NotFound;
