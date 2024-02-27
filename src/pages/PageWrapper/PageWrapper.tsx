import { MyComponent } from "@/components/molecules/MyComponent/MyComponent";
import React from "react";

export default function PageWrapper() {
  return (
    <article className="w-full pt-20 !font-poppins">
      <MyComponent />
    </article>
  );
}
