import "../CSS/Article.css";
import { latestArticles } from "../data";

const Article = () => {
  return (
    <section className="article-container">
      <h1 className="article-heading">Latest Articles</h1>
      {latestArticles.map((article) => (
        <article key={article.id} className="article">
          <img
            src={article.image}
            alt={article.title}
            className={`article-image article-image-${article.id}`}
          />
          <h2 className="article-title">{article.title}</h2>
          <p className="article-content">{article.content}</p>
          <p className="article-detail">{article.detail}</p>
        </article>
      ))}
    </section>
  );
};

export default Article;
