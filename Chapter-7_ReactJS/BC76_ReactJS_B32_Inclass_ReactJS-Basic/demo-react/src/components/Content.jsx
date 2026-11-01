import React from "react";
import Card from "./Card";

const Content = () => {
  return (
    <div className="text-center bg-[#5A6FF5] p-section-padding text-white w-[70%]">
      Content
      <div className="grid grid-cols-3 gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Content;
