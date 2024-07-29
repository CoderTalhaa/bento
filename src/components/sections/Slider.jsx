import React from "react";

export default function Slider() {
  return (
    <div className="logos overflow-hidden flex gap-[16px]">
      <div class="logos-slide flex gap-[16px] animate-loop-scroll">
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
      </div>
      <div class="logos-slide flex gap-[16px] animate-loop-scroll">
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
        <Img src="/react.png" />
      </div>
    </div>
  );
}

const Img = ({ src }) => {
  return (
    <div className="bg-secondary rounded-3xl p-2">
      <img src={src} alt="image" className="h-full" />
    </div>
  );
};
