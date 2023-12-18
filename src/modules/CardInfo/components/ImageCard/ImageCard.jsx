import React from "react";

export const ImageCard = ({ img, alt }) => {
  if (!img) return <div> </div>;
  return <img src={img} className="img-fluid" alt={alt} />;
};
