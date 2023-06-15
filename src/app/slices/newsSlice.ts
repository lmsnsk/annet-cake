import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface NewsBlock {
  text: Array<string>;
  images: Array<string>;
}

interface NewsSliceI {
  items: Array<NewsBlock>;
}

const initialState: NewsSliceI = {
  items: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews(state, action: PayloadAction<Array<NewsBlock>>) {
      state.items = action.payload;
    },
  },
});

export const { setNews } = newsSlice.actions;

export default newsSlice.reducer;
