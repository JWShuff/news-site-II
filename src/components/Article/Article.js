import { Card } from 'react-bootstrap'

function Article(props) {
  return (
    <Card bg='dark' text='light' style={{ width: '30rem' }}>
      { props.multimedia[0] && <Card.Img  version='top' alt={ props.title } src={ props.multimedia[0].url }/> }
      <Card.Title> {props.title} </Card.Title>
      <Card.Subtitle> {props.created_date} </Card.Subtitle>
      { props.byline && <Card.Text> { props.byline }</Card.Text>}
      <Card.Body> { props.abstract }</Card.Body>
    </Card>
  )
}

export default Article;