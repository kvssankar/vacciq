import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "reactstrap";

const Headlines = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(1);
  const fetchData = () => {
    setPage(page + 1);
    axios
      .get("/api/user/news/" + page)
      .then((data) => {
        setIsLoading(0);
        setNews([...news, ...data.data.articles]);
      })
      .catch((err) => {
        setIsLoading(0);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h6 className="ml-1 fontstyle1small pb-2  mt-3">
        Bored?? Here is the top headlines...
      </h6>
      <div>
        {news.map((article) => (
          <div className="newscontainer">
            <div className="d-flex align-items-center">
              {article.urlToImage && <img src={article.urlToImage} alt="" />}
              <p className="title">
                <b>{article.title}</b>
              </p>
            </div>
            <p className="content">{article.content}</p>
          </div>
        ))}
      </div>
      <div className="w-100 d-flex justify-content-center">
        {!isLoading ? (
          <button
            onClick={() => {
              setIsLoading(1);
              fetchData();
            }}
            className="mt-2 p-1 primary-button"
          >
            Load More
          </button>
        ) : (
          <Spinner color="primary" />
        )}
      </div>
    </>
  );
};

export default Headlines;
