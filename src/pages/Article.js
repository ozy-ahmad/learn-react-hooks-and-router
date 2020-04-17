import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

const Article = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const URL = "http://localhost:8000/article";
    Axios.get(URL).then((res) => {
      console.log(res);
      const article = res.data;
      setArticle(article);
    });
  }, []);
  const showData = article.map((item, index) => (
    <div className="col-4">
      <div key={index}>
        <Card>
          <CardImg top width="100%" src={item.imgURL} alt="Card img" />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardText>{item.article1}</CardText>
            <Link to={`/article/${item.id}`}>Show more </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  ));
  return (
    <div className="row">
      <div className="container">{showData}</div>
    </div>
  );
};

export default Article;
