import { useState, useEffect } from "react";

// components

// types

const Lesson12 = () => {
  const [categories, setCategories] = useState([]);
  const [windowSize, setWindowSize] = useState({});

  async function getData() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();
    console.log(data);
    setCategories(data.categories);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <h1>
        {windowSize.width} / {windowSize.height}
      </h1>
      {categories.map((category) => (
        <li key={category.idCategory}>{category.strCategory}</li>
      ))}
    </>
  );
};

export default Lesson12;
