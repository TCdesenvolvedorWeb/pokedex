import { Nav , ContainerLogo , ThemeToggle} from "../../styles/Header";
import { Search } from "../Buttons/Searche";
import { useContext } from "react";
import { ThemeToggleContext , themes} from "../../context/ThemeToggle";
import { Filter } from "../Buttons/filter";

const Header = () => {
  const { theme , setTheme} = useContext(ThemeToggleContext)

  return (
    <header>
      <Nav>
        <ContainerLogo>
          <img src="./src/img/logo.png" alt="logo" />
        </ContainerLogo>
        <Search/>
        <Filter/>
        <ThemeToggle onClick={() => setTheme(theme === themes.darck ? themes.light : themes.darck)}>change theme</ThemeToggle>
      </Nav>
    </header>
  );
};

export { Header };