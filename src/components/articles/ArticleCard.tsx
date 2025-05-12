import React from 'react';
import '../../styles/article-card.css';

interface ArticleProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, author, date, readTime, image }) => {
  return (
    <article className="article-card">
      {image && <img src={image} alt={title} className="article-image" />}
      <div className="article-content">
        <h2>{title}</h2>
        <div className="article-meta">
          <span className="author">{author}</span>
          <span className="date">{date}</span>
          <span className="read-time">{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;