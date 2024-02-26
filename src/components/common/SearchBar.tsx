import { useSelector } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";
import CustomInput from "./CustomInput";
import { useEffect, useRef, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { RootState } from "../../services/state/store";
import { Car } from "../../utils/sharedTypes";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  toggleSearch: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleSearch }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState<Car[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const { products } = useSelector((state: RootState) => state.car);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const closeSearch = (): void => {
    toggleSearch(false);
  };

  useOutsideClick(searchRef, closeSearch);

  useEffect(() => {
    if (query) {
      let newProducts = products?.filter((item: Car) =>
        item.CarName.toLowerCase().includes(query.toLowerCase())
      );
      setSearchedProducts(newProducts);
    }
    searchedProducts.length ? console.log("true") : console.log("false");
  }, [query]);

  return (
    <div id="searchBar">
      <div className="searchBar__content" ref={searchRef}>
        <div className="container">
          <div className="search__input">
            <CustomInput
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search for car..."
              inputClassName="input__field"
              allowClear={true}
              size="middle"
            />
          </div>
          {query && (
            <div className="search__box">
              <div className="search__results">
                {searchedProducts.length ? (
                  searchedProducts.map((filtredItem: Car) => {
                    const { CarID, CarName, CategoryName, Price, Image } =
                      filtredItem;
                    return (
                      <div
                        className="search__result__item"
                        key={CarID}
                        onClick={() => {
                          navigate(`/car-details/${CarID}`);
                          closeSearch();
                        }}
                      >
                        <div className="image__container">
                          <img src={`/cars-images/${Image}`} alt={CarName} />
                        </div>
                        <div className="prod__details">
                          <div className="prod__info">
                            <span className="name">{CarName}</span>
                            <span className="category__name">
                              {CategoryName}
                            </span>
                          </div>
                          <div className="price">
                            <span className="new__pice">{Price}DH</span>
                            <span className="per__day">/ day</span>
                            <span className="old__price">80.00DH</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="not__found">
                    <FaBoxOpen />
                    <span>Not found</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
