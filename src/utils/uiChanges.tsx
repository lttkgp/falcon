import { useState } from "react";

type Theme = "Dark" | "Light";

let setThemeOnUserPref = () => {
  let currentTheme = fetchPrefTheme();
  setInitialTheme(currentTheme);
  console.log("Setting theme", { currentTheme });
};

let setInitialTheme = (theme: Theme) => {
  let el = document.querySelector("html");

  if (theme === "Dark") {
    el?.classList.add("dark");
    el?.classList.remove("light");
  }
};

let changeTheme = () => {
  if (document !== undefined) {
    let el = document.querySelector("html");

    if (el?.classList !== null)
      if (el?.classList.contains("light")) {
        el?.classList.add("dark");
        el?.classList.remove("light");
        window.localStorage.setItem("theme", "dark");
      } else {
        el?.classList.add("light");
        el?.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
  }
};

let fetchTheme = (): Theme => {
  if (document !== undefined) {
    let el = document.querySelector("html");
    if (el?.classList !== null)
      if (el?.classList.contains("light")) {
        return "Light";
      } else {
        return "Dark";
      }
  }
  return "Light";
};

let fetchPrefTheme = (): Theme => {
  if (document !== undefined) {
    let el = document.querySelector("html");

    if (window.localStorage.getItem("theme") !== null) {
      if (window.localStorage.getItem("theme") === "dark") {
        return "Dark";
      } else return "Light";
    } else {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        if (el?.classList !== null) {
          return "Dark";
        } else return "Light";
      }
    }
  }
  // Defaults to Light Theme
  return "Light";
};

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("Dark");

  const toggleTheme = () => {
    changeTheme();
    setTheme(() => invertTheme(theme));
  };
  return { theme, toggleTheme };
};

const invertTheme = (theme: Theme): Theme => {
  if (theme === "Dark") {
    return "Light";
  } else {
    return "Dark";
  }
};

let useSidebarOpen = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar(e: any) {
    if (document !== undefined) {
      let el = document.querySelector(".content");
      if (el?.classList !== null) {
        if (sidebarOpen) {
          el?.classList.add("contract");
          el?.classList.remove("expand");
        } else {
          el?.classList.add("expand");
          el?.classList.remove("contract");
        }
      }
    }
    setSidebarOpen(() => !sidebarOpen);
  }

  return { sidebarOpen, toggleSidebar };
};

export { changeTheme, useSidebarOpen, setThemeOnUserPref, useTheme, invertTheme };
