import { Container } from 'react-bootstrap';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

function ArticlePage(props) {
  const article = News[props.match.params.articleID-1]
  return (
    <Container >
      <Article {...article} />
    </Container>
  );
}

export default ArticlePage;
