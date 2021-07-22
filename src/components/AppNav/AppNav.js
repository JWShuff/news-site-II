

function AppNav(props) {
    const renderNavItems = () => {
    let elements = props.navItems.map((item, index) => {
      return (
        <div>
          <a href='#' key={index} onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } | 
          </a> 
        </div>
      )
    })
    return <span>
      { elements }
    </span>
  }
  return (
    <nav>
      { renderNavItems() }
    </nav>
  )
}

export default AppNav;