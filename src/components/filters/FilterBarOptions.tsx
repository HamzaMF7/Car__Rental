import { AiOutlineClose } from "react-icons/ai";
import { Checkbox, Slider } from "antd";
import React, { useState } from "react";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../services/state/store";
import { useEffect } from "react";
import {
  getFilterBarDta,
  getPriceRange,
  setBrandFilters,
  setCategoryFilters,
  setChoosedPrice,
  setSortedValue,
} from "../../services/state/CarSlice";

interface MobileFilterProps {
  isMobSortVisible?: boolean;
  isMobFilterVisible?: boolean;
  handleMobSortVisibility?: (toggle: boolean) => void;
  handleMobFilterVisibility?: (toggle: boolean) => void;
}

const FilterBarOptions: React.FC<MobileFilterProps> = ({
  isMobSortVisible,
  isMobFilterVisible,
  handleMobFilterVisibility,
  handleMobSortVisibility,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const { filterBar, products, selectedPrice } = useSelector(
    (state: RootState) => state.car
  );
  const { minPrice, maxPrice } = selectedPrice;
  const { sortMenu, brandsMenu, categoryMenu } = filterBar;
  const [selectedSort, setSelectedSort] = useState("None");

  useEffect(() => {
    dispatch(getFilterBarDta());
  }, []);
  useEffect(() => {
    dispatch(getPriceRange());
  }, [products]);


  const handleSortByChange = (value: string) => {
    setSelectedSort(value);
    dispatch(setSortedValue({ newValue: value }));
  };
  const handleBrandFiltersChange = (e: CheckboxChangeEvent) => {
    console.log(e.target.value, typeof e.target.value, e.target.checked);
    dispatch(
      setBrandFilters({ brand: e.target.value, checked: e.target.checked })
    );
  };
  const handleCategoryFiltersChange = (e: CheckboxChangeEvent) => {
    dispatch(
      setCategoryFilters({
        categoryName: e.target.value,
        checked: e.target.checked,
      })
    );
  };
  const handlePriceChange = (value: number) => {
    dispatch(setChoosedPrice({ newPrice: value }));
  };
  return (
    <div className="filter__bar">
      {/* ---- Sort Menu ------ */}
      <div className={`sort__options ${isMobSortVisible ? "show" : ""}`}>
        <div className="sort__head">
          <h4 className="title">Sort By</h4>
          <span
            className="close__btn"
            onClick={() => handleMobSortVisibility?.(false)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <ul className="sort__menu">
          {sortMenu.map((item) => {
            const { id, title } = item;
            const isActive = selectedSort === title;
            return (
              <li
                key={id}
                className={ isActive ? "active__sort__value" : ""}
                onClick={() => handleSortByChange(title)}
              >
                <span className="sort__value">{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* ----- Filter Menu ------ */}
      <div className={`filter__options ${isMobFilterVisible ? "show" : ""}`}>
        <div className="filter__head">
          <h4 className="title">Filter By</h4>
          <span
            className="close__btn"
            onClick={() => handleMobFilterVisibility?.(false)}
          >
            <AiOutlineClose />
          </span>
        </div>

        {/* Filter By Brands */}
        <div className="filter__block">
          <h6>Brands</h6>
          <ul className="filter__menu">
            {brandsMenu.map((item) => {
              const { id, label } = item;
              return (
                <li
                  key={id}
                  className="filter__
                checkbox"
                >
                  <Checkbox value={label} onChange={handleBrandFiltersChange}>
                    {label}
                  </Checkbox>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter By Category */}
        <div className="filter__block">
          <h6>Category</h6>
          <ul className="filter__menu">
            {categoryMenu.map((item) => {
              const { id, label } = item;
              return (
                <li key={id} className="filter_checkbox">
                  <Checkbox
                    value={label}
                    onChange={handleCategoryFiltersChange}
                  >
                    {label}
                  </Checkbox>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Filter By Price*/}
        <div className="filter__block">
          <h6>Price</h6>
          <div className="price__filter">
            <p>displayPrice</p>
            <Slider
              defaultValue={400}
              min={minPrice}
              max={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBarOptions;
