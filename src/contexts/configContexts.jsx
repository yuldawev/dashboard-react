import { createContext, useState, useEffect, useContext } from "react";
import useLocalStorage from "../hooks/localStoreg";

const INITIAL_STATE = {
  isMenuOpen: false,
  theme: "light",
};

export const ConfigContext = createContext(INITIAL_STATE);
export const useConfig = () => useContext(ConfigContext);
const { Provider } = ConfigContext;

export const ConfigProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage("light");
  useEffect(() => {

    if (
      theme === "light" &&
      document.body.classList.contains("dark-theme-variables")
    ) {
      document.body.classList.remove("dark-theme-variables");
    } else if (
      theme === "dark" &&
      !document.body.classList.contains("dark-theme-variables")
    ) {
      document.body.classList.add("dark-theme-variables");
    }
  }, [theme]);

  return (
    <Provider value={{ isMenuOpen, setIsMenuOpen, setTheme, theme }}>
      {children}
    </Provider>
  );
};
