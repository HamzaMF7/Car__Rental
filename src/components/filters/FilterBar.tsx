import useToggle from "../../hooks/useToggle";
import FilterBarOptions from "./FilterBarOptions";
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa";

const FilterBar = () => {
  const [isMobSortVisible, handleMobSortVisibility] = useToggle(false);
  const [isMobFilterVisible, handleMobFilterVisibility] = useToggle(false);
  return (
    <>
      {/* --------- filterbar-default -------- */}
      <div className="filterbar__wrapper">
        <FilterBarOptions />
      </div>

      {/* ---------- filterbar-mobile --------- */}
      <div id="filterbar__mob">
        <div className="filterbar__mob__wrapper">
          <h4 className="title" onClick={() => handleMobSortVisibility(true)}>
            <FaSortAmountDownAlt /> <span>Sort</span>
          </h4>
          <span>|</span>

          <h4 className="title" onClick={() => handleMobFilterVisibility(true)}>
            <FaFilter /> <span>Filter</span>
          </h4>
        </div>
        <FilterBarOptions
          isMobSortVisible={isMobSortVisible}
          isMobFilterVisible={isMobFilterVisible}
          handleMobSortVisibility={() => handleMobSortVisibility()}
          handleMobFilterVisibility={() => handleMobFilterVisibility()}
        />
      </div>
    </>
  );
};

export default FilterBar;
