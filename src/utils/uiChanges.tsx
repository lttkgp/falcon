let setThemeOnUserPref = () => {
  let el = document.querySelector("html");

  if(window.localStorage.getItem("theme") !== null){
    if(window.localStorage.getItem("theme") === "dark"){
      el?.classList.remove("light");
      el?.classList.add("dark");
    }
  } else {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // dark mode

      if (el?.classList !== null) {
        el?.classList.add("dark");
        el?.classList.remove("light");
      }
    }
  }
};

let changeTheme = () => {
  if (document !== undefined) {
    let el = document.querySelector("html");

    if (el?.classList !== null) {
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
  }
};

let changeExpand = () => {
  if (document !== undefined) {
    let el = document.querySelector(".content");

    if (el?.classList !== null) {
      // console.log(el?.classList);
      if (el?.classList.contains("expand")) {
        el?.classList.add("contract");
        el?.classList.remove("expand");
      } else {
        el?.classList.add("expand");
        el?.classList.remove("contract");
      }
    }

    let sideb = document.querySelector(".sidebar");
    if (sideb !== null)
      if (sideb?.classList.contains("short")) {
        sideb.classList.remove("short");
      } else {
        sideb.classList.add("short");
      }
  }
};

export { changeTheme, changeExpand, setThemeOnUserPref };
