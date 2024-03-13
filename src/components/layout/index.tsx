import React from "react";
import { Header } from "../molecules/Header/Header";
import { MainContent } from "../organisms/MainContent/MainContent";
import { Footer } from "../molecules/Footer/Footer";

export function Layout({ children }: any) {
  return (
    <div className="flex h-auto flex-col md:flex-row">
      <Header />
      <div className="flex w-full flex-col px-3 md:px-4">
        <MainContent>{children}</MainContent>
      </div>
      <Footer />
    </div>
  );
}
