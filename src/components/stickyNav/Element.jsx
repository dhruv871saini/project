import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useDash } from "../context/dashcontext";

const Element = () => {
  const { setfirst, setsecond } = useDash();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  // Memoize categories state
  const categoriesMemoized = useMemo(() => categories, [categories]);

  useEffect(() => {
    const getAllCategories = () => {
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    };

    getAllCategories();
  }, []);

  const getDataByCategoryName = (cate_name) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cate_name}`)
      .then((res) => {
        setActiveCategory(cate_name === "ALL" ? null : cate_name);
        setfirst(res.data); 
        setsecond(cate_name);
      })
      .catch((error) => {
        console.error(
          `Error fetching products for category ${cate_name}:`,
          error
        );
      });
  };

  const getAllData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setfirst(res.data);
      setActiveCategory(null); 
      setsecond("all")
    });
  };

  return (
    <div>
      <button
        className="btn "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#categoryOffcanvas"
        aria-controls="categoryOffcanvas"
      >
        <ElementLogo/>
      </button>
      <div
        className="offcanvas offcanvas-start bg-dark"
        tabIndex={-1}
        id="categoryOffcanvas"
        aria-labelledby="categoryOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title text-white"
            id="categoryOffcanvasLabel"
          >
            Choose a Category
          </h5>
          <button
            type="button"
            className="btn-close text-white bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="list-group " style={{ paddingTop: "10%" }}>
            <li
              style={{
                textTransform: "capitalize",
                listStyle: "none",
                borderRadius: "1em",
                marginTop: "2%",
              }}
            >
              <a
                className={`list-group-item ${activeCategory === null ? "active" : ""}`}
                onClick={getAllData}
              >
                ALL
              </a>
            </li>

            {categoriesMemoized.map((item, index) => (
              <li
                key={index}
                style={{
                  textTransform: "capitalize",
                  listStyle: "none",
                  borderRadius: "1em",
                  marginTop: "2%" 
                }}
              >
                <button
                  className={`list-group-item ${item === activeCategory ? "active" : ""} text-capitalize`}
                  onClick={() => getDataByCategoryName(item)}
                  style={{ textDecoration: "none", textAlign: "left", width: "100%"}}
                  
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Element;

const ElementLogo=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="#000000" fill="none">
    <path d="M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
  )
}