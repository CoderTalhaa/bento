import React from "react";
import { twMerge } from "tailwind-merge";

export default function Container({ children, className }) {
  return (
    <div
      className={twMerge("conatiner max-w-[calc(100%-60px)] mx-auto ", className)}
    >
      {children}
    </div>
  );
}
