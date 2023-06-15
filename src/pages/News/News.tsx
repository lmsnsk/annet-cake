import axios from "axios";
import React from "react";
import { useEffect } from "react";

import stl from "./News.module.scss";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setNews } from "../../app/slices/newsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import NewsBlockItem from "./NewsBlockItem";

const News: React.FC = () => {
  const news = useAppSelector((state) => state.news.items);
  const newsURL = "https://648944a95fa58521caaf5a6c.mockapi.io/news";
  const dispatch = useAppDispatch();

  const fetchNews = createAsyncThunk("news/fetchAsyncNews", async (str: string) => {
    try {
      const items = await axios.get(str);
      dispatch(setNews(items.data));
    } catch (err) {
      console.log("ВНИМАНИЕ ОШИБКА: ", err);
    }
  });

  useEffect(() => {
    dispatch(fetchNews(newsURL));
  }, []);

  if (!news.length) return <>Loading...</>;

  return (
    <>
      {news.map((obj) => (
        <React.Fragment key={obj.text[0] + "/obj"}>
          <NewsBlockItem obj={obj} />
        </React.Fragment>
      ))}
      ;
    </>
  );
};

export default News;
