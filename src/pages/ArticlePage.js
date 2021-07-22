import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

function ArticlePage(props) {
  const article = News[props.match.params.articleID-1]
  return (
    <div>
      <Article {...article} />
    </div>
  );
}

export default ArticlePage;
