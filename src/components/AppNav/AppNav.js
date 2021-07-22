

function AppNav(props) {
    const renderNavItems = () => {
    let elements = props.navItems.map((item, index) => {
      return (
          <a href='#' key={index} onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } | 
          </a> 
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