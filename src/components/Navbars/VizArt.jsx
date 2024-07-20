import React from "react";

const VizArt = () => {
  return (
    // <div height={`${window.innerHeight}px`}>
    <iframe
      src="http://localhost:5000/admin/Vizart"
      title="VizArt"
      height="100%"
      width={"100%"}
      style={{ height: "calc(100vh - 6px)" }}
    />
    // </div>
  );
};

export default VizArt;
