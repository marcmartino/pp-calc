import React from "react";
import { Header } from "./components/Header";
import { RouteProvider } from "./utils/router";
import { Page } from "./components/Page";
import { Footer } from "./components/Footer";

function App() {
  return (
    <RouteProvider>
      <Header>
        <div className="flex flex-col h-full items-center justify-center ">
          <Page />
        </div>
      </Header>
      <Footer />
    </RouteProvider>
  );
}

export default App;
