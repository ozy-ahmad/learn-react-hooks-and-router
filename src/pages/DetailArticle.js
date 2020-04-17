import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { useParams } from "react-router-dom";

const DetailArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    const URL = "http://localhost:8000/article";
    Axios.get(`${URL}/${id}`).then((res) => {
      console.log(res);
      const article = res.data;
      setArticle(article);
    });
  }, [id]);

  return (
    <div className="row">
      <div className="container">
        <div className="col-4">
          <div>
            <Card>
              <CardImg top width="100%" src={article.imgURL} alt="Card img" />
              <CardBody>
                <CardTitle>{article.title}</CardTitle>
                <CardText>{article.article1}</CardText>
                <CardText>{article.article2}</CardText>
                <CardText>{article.article3}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailArticle;
