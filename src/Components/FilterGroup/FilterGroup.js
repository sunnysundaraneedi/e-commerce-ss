import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../Store/productsSlice";
import "./FilterGroup.css";

const FilterGroup = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  let categories = products.map((product) => product.category);
  categories = [...new Set(categories)];

  const [filterParam, setFilterParam] = useState({
    categoryParam: "",
    searchQuery: "",
    priceParam: "",
  });

  const changeHandler = (event) => {
    setFilterParam((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  useEffect(() => {
    dispatch(productActions.filterProducts(filterParam.categoryParam));
  }, [filterParam.categoryParam, dispatch]);

  useEffect(() => {
    dispatch(productActions.filterBySearch(filterParam.searchQuery));
  }, [filterParam.searchQuery, dispatch]);

  useEffect(() => {
    dispatch(productActions.sortByPrice(filterParam.priceParam));
  }, [filterParam.priceParam, dispatch]);

  return (
    <Fragment>
      <select
        className="select-opt"
        name="categoryParam"
        onChange={changeHandler}
        value={filterParam.categoryParam}
      >
        <option value="all">----All----</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input
        type="search"
        className="searchbar"
        placeholder="Search Items "
        onChange={changeHandler}
        name="searchQuery"
        value={filterParam.searchQuery}
      />
      <div className="price_compare">
        <div>
          <input
            type="radio"
            id="high"
            name="priceParam"
            value="high"
            onChange={changeHandler}
          />
          <label htmlFor="high">Price(High to Low)</label>
        </div>
        <div>
          <input
            type="radio"
            id="low"
            name="priceParam"
            value="low"
            onChange={changeHandler}
          />
           <label htmlFor="low">Price(Low to High)</label>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterGroup;
