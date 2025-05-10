import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  const dataFetch = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6e88c1d49da445c4ba2e5b8ee4248589&pageSize=40`;
    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
  };

  useEffect(() => {
    dataFetch();
  }, [category]);

  return (
    <div>
      <h2 className="text-center my-3">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
