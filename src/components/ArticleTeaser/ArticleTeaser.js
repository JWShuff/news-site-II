

function ArticleTeaser(props) {
  
  return (
    <div>
      <a href='#' onClick={ (event) => {
        props.handleTitleClick(props.id+1);
        event.preventDefault();
        }}>
        { props.title } 
      </a>
      <p>
        { props.created_date }
      </p>
    </div>
  )
}

export default ArticleTeaser;