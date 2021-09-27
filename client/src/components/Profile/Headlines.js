import React, { useEffect, useState } from "react";

import axios from "axios";

const Headlines = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    axios
      .get("/api/user/news/" + page)
      .then((data) => setNews(data.data.articles));
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
    </>
  );
};

export default Headlines;
