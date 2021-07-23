import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import { Container } from 'react-bootstrap';

function HomePage(props) {
  return (
    <Container bg='dark'>
      <ArticleList articles={ News } handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`) } />
    </Container>
  )
}

export default HomePage;
