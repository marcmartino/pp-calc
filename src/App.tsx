import React from "react";
import { Header } from "./components/Header";
import { pages } from "./constants/pageNavigation";
import { MaxMultiplierForm } from "./components/MaxMultiplierForm";

function App() {
  return (
    <Header activePage="maxMultiplier" pages={pages}>
      <div className="flex flex-col h-full items-center justify-center ">
        <MaxMultiplierForm />
      </div>
    </Header>
  );
}

export default App;
