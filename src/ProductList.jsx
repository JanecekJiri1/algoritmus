import "./App.css";
import React, { useState } from "react";
import FilterProduct from "./FilterProduct";

const ProductsName = [
  { id: 1, product: "Jahoda", types: "ovoce" },
  { id: 2, product: "Hruška", types: "ovoce" },
  { id: 3, product: "Petržel", types: "zelenina" },
  { id: 4, product: "Banán", types: "ovoce" },
  { id: 5, product: "Meloun", types: "ovoce" },
  { id: 6, product: "Rajče", types: "ovoce" },
  { id: 7, product: "Brambora", types: "zelenina" },
  { id: 8, product: "Mrkev", types: "zelenina" },
  { id: 9, product: "Jablko", types: "ovoce" },
  { id: 10, product: "Brokolice", types: "zelenina" },
];

function ProductList(props) {
  const [searchValue, setSearchValue] = useState("");
  const [filterProduct, setFilterProduct] = useState("all");

  let filterProductList = searchValue.filter((product) => {
    if (filterProduct === "zelenina") {
      return product.product === true;
    }
  });

  const filtered = ProductsName.filter((product) => {
    return product.product;
  });

  function onFilterValueSelected(filterValue) {
    setFilterProduct(filterValue);
  }

  return (
    <div className="App">
      <div className="searchField">
        <input
          type="search"
          placeholder="Zadej co hledáš"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <FilterProduct filterValueSelected={onFilterValueSelected} />
      <div>
        {ProductsName.filter((product) => product.product.match(new RegExp(searchValue, "i"))).map(
          (product) => {
            return (
              <div key={product.id}>
                <li>{product.product}</li>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default ProductList;
