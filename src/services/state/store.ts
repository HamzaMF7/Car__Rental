import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";

import carReducer from "./CarSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;