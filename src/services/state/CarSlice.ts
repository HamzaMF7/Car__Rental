import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Car, DetailedCar, FilterBar } from "../../utils/sharedTypes";
import axios from "axios";
import { baseURL } from "../../utils/api";
import { STATUS } from "../../utils/status";

interface State {
  products: Car[];
  sortedValue: string;
  filtredProducts: Car[];
  productDetails: DetailedCar[];
  filterBar: FilterBar;
  brandFilters: string[];
  categoryFilters: string[];
  wishlistIDs: number[];
  wishlistData: Car[];
  selectedPrice: {
    choosedPrice: number;
    minPrice: number;
    maxPrice: number;
  };
  status: string;
}

export const getProducts = createAsyncThunk(
  "cars/get-products",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/cars`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
        additionalInfo: "Fetching products failed",
      });
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "cars/getProductDetails",
  async (carID: number, thunkAPI) => {
    try {
      // Make both API requests concurrently
      const [carResponse, carDetailsResponse] = await Promise.all([
        axios.get(`${baseURL}/cars?CarID=${carID}`),
        axios.get(`${baseURL}/carsDetails?CarID=${carID}`),
      ]);

      const carData = carResponse.data;
      const carDetailsData = carDetailsResponse.data;

      // Merge the data from both responses into a single object
      const mergedData = { ...carData[0], ...carDetailsData[0] };

      console.log(mergedData);

      // Wrap the merged data in an array
      return [mergedData];
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
        additionalInfo: "Fetching products failed",
      });
    }
  }
);

export const getFilterBarDta = createAsyncThunk(
  "cars/get-filter-bar",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/filterbar`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error,
        additionalInfo: "Fetching filter bar data failed",
      });
    }
  }
);

// export const getWishlistData = createAsyncThunk(
//   "cars/get-wishlist",
//   async (_, thunkAPI) => {
//     const { wishlistIDs } = thunkAPI.getState().car;
//     console.log("wish list ", wishlistIDs);
//     try {
//       const response = await axios.post(`${baseURL}/wishlist`, { wishlistIDs });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         error,
//         additionalInfo: "Fetching wishlist data failed",
//       });
//     }
//   }
// );

const initialState: State = {
  products: [],
  sortedValue: "None",
  filtredProducts: [],
  productDetails: [],
  filterBar: { sortMenu: [], brandsMenu: [], categoryMenu: [] },
  brandFilters: [],
  categoryFilters: [],
  wishlistIDs: [],
  wishlistData: [],
  selectedPrice: {
    choosedPrice: 0,
    minPrice: 0,
    maxPrice: 0,
  },
  status: STATUS.IDLE,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    getPriceRange: (state) => {
      const priceArr = state.products.map((item: Car) => item.Price);
      const max = Math.max(...priceArr);
      const min = Math.min(...priceArr);
      state.selectedPrice.minPrice = min;
      state.selectedPrice.maxPrice = max;
    },
    setSortedValue: (state, action: PayloadAction<{ newValue: string }>) => {
      const { newValue } = action.payload;
      state.sortedValue = newValue;
    },
    setBrandFilters: (
      state,
      action: PayloadAction<{ brand: string; checked: boolean }>
    ) => {
      const { brand, checked } = action.payload;
      if (checked) {
        state.brandFilters.push(brand);
      } else {
        state.brandFilters = state.brandFilters.filter(
          (item) => item.toLowerCase() !== brand.toLowerCase()
        );
      }
    },
    setCategoryFilters: (
      state,
      action: PayloadAction<{ categoryName: string; checked: boolean }>
    ) => {
      const { categoryName, checked } = action.payload;
      if (checked) {
        state.categoryFilters.push(categoryName);
      } else {
        state.categoryFilters = state.categoryFilters.filter(
          (item) => item.toLowerCase() !== categoryName.toLowerCase()
        );
      }
    },
    setwishlistIDs: (state, action: PayloadAction<{ carID: number }>) => {
      const { carID } = action.payload;
      console.log(carID);
      if (state.wishlistIDs.includes(carID)) {
        state.wishlistIDs = state.wishlistIDs.filter(
          (itemId) => itemId !== carID
        );
      } else {
        state.wishlistIDs.push(carID);
      }
      // when the backend is created delete this if statement it's just for test
      if (state.wishlistIDs) {
        state.wishlistData = state.products.filter((carItem) =>
          state.wishlistIDs.includes(carItem.CarID)
        );
      }
    },
    setChoosedPrice: (state, action: PayloadAction<{ newPrice: number }>) => {
      const { newPrice } = action.payload;
      state.selectedPrice.choosedPrice = newPrice;
    },
    applyFilters: (state) => {
      let updatedProducts = [...state.products];

      /*==== Sorting ====*/
      switch (state.sortedValue) {
        case "None":
          updatedProducts;
          break;
        case "Popular Car":
          updatedProducts = updatedProducts.filter(
            (item: Car) => item.RentalFrequency > 10
          );
          break;
        case "Top Rated":
          updatedProducts = updatedProducts.filter(
            (item: Car) => item.RateCount > 4
          );
          break;
        case "Price(Lowest First)":
          updatedProducts = updatedProducts
            .slice()
            .sort((a, b) => a.Price - b.Price);
          break;
        case "Price(Highest First)":
          updatedProducts = updatedProducts
            .slice()
            .sort((a, b) => b.Price - a.Price);
          break;
        default:
          throw new Error("Wrong Option Selected");
      }

      /*==== Filtering ====*/
      // filter by brands
      if (state.brandFilters.length) {
        updatedProducts = updatedProducts.filter((item: Car) =>
          state.brandFilters.includes(item.Brand)
        );
      }
      // filter by categories
      if (state.categoryFilters.length) {
        updatedProducts = updatedProducts.filter((item: Car) =>
          state.categoryFilters.includes(item.CategoryName)
        );
      }
      // filter by price
      if (state.selectedPrice.choosedPrice) {
        updatedProducts = updatedProducts.filter(
          (item: Car) => item.Price <= state.selectedPrice.choosedPrice
        );
      }
      state.filtredProducts = updatedProducts;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filtredProducts = action.payload;
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = STATUS.FAILED;
      })
      .addCase(getProductDetails.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.productDetails = action.payload;
        state.status = STATUS.SUCCEEDED;
      })
      .addCase(getProductDetails.rejected, (state) => {
        state.status = STATUS.FAILED;
      })
      .addCase(getFilterBarDta.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getFilterBarDta.fulfilled, (state, action) => {
        state.filterBar.sortMenu = action.payload.sortMenu;
        state.filterBar.brandsMenu = action.payload.brandsMenu;
        state.filterBar.categoryMenu = action.payload.categoryMenu;
        state.status = STATUS.SUCCEEDED;
      });
    // ****** uncomment this when the the api is created in backend
    // .addCase(getFilterBarDta.rejected, (state) => {
    //   state.status = STATUS.FAILED;
    // })
    // .addCase(getWishlistData.pending, (state) => {
    //   state.status = STATUS.LOADING;
    // })
    // .addCase(getWishlistData.fulfilled, (state, action) => {
    //   state.wishlistData = action.payload;
    //   state.status = STATUS.SUCCEEDED;
    // })
    // .addCase(getWishlistData.rejected, (state) => {
    //   state.status = STATUS.FAILED;
    // })
  },
});

export const {
  getPriceRange,
  setSortedValue,
  setBrandFilters,
  setCategoryFilters,
  setwishlistIDs,
  setChoosedPrice,
  applyFilters,
} = carSlice.actions;
export default carSlice.reducer;
