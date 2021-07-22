

function Article(props) {
  return (
    <div>
      <h1> {props.title} </h1>
      <p> {props.created_date} </p>
      { props.byline && <h2> { props.byline }</h2>}
      { props.multimedia[0] && <img alt={ props.title } src={ props.multimedia[0].url }/> }
      <p> { props.abstract }</p>
    </div>
  )
}

export default Article;