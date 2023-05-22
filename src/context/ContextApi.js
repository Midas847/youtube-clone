import { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const DataContext = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [theme, setTheme] = useState(null);
  const [videos, setvideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = async (page) => {
    setLoading(true);
    const data = await fetchDataFromApi(page);
    setvideos(data.data.posts);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        mobileMenu,
        setMobileMenu,
        theme,
        setTheme,
        videos,
        setPageNumber,
        pageNumber,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
