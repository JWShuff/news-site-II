import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { ListGroup } from 'react-bootstrap'


function ArticleList(props) {
  let articles = props.articles

  const getAllTeasers = (articles) => {
    return articles.map((article, idx) => {
      return <ArticleTeaser key={idx} id={idx} title={ article.title } created_date={article.created_date} handleTitleClick={props.handleTitleClick} />
    })
  }

  return (
    <div>
      { getAllTeasers(articles) }
    </div>
  )
}

export default ArticleList;
