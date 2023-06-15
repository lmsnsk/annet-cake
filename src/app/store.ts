import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: { news: newsSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
