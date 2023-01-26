import { Route, Switch } from "react-router-dom";
import SingleArticle from "../SingleArticle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";
import { useEffect } from "react";

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.articleState.entries);

  console.log(articles);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ol>

      <Switch>
        <Route path="/article/:id">
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
