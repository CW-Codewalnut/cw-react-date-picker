import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return <main className="main-content w-full relative top-40 h-auto mx-auto">{children}</main>;
}
