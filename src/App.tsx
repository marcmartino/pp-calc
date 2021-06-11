import React from "react";
import { Header } from "./components/Header";
import { RouteProvider } from "./utils/router";
import { Page } from "./components/Page";
import { Footer } from "./components/Footer";

function App() {
  return (
    <RouteProvider>
      <div className="flex h-full flex-col justify-between">
        <Header>
          <div className="flex flex-col h-full items-center justify-center ">
            <Page />
          </div>
        </Header>
        <Footer />
      </div>
    </RouteProvider>
  );
}

export default App;
