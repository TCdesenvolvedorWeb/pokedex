import React from "react";
import { GlobalStyled } from "../src/styles/StyledGlobal";
import { AppRoutes } from "../src/pages/routes";
import { NameProvider } from "./context/GetName";
import { ThemeToggleProvider } from "./context/ThemeToggle";
import { FilterProvider } from "./context/filter";

function App() {
  return (
    <>
      <ThemeToggleProvider>
        <FilterProvider>
          <NameProvider>
            <GlobalStyled />
            <AppRoutes />
          </NameProvider>
        </FilterProvider>
      </ThemeToggleProvider>
    </>
  );
}

export default App;
