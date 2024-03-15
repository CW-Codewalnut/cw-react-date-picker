import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <main className="main-content w-full relative inset-y-28 mb-40 mx-auto flex flex-col px-3 md:px-4">
      {children}
    </main>
  );
}
