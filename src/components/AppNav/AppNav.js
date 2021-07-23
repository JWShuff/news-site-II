import { Navbar, NavLink } from "react-bootstrap"

function AppNav(props) {
    const renderNavItems = () => {
    let elements = props.navItems.map((item, index) => {
      return (
          <Navbar.Text>
            <a href='#' key={index} onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } |
            </a> 
          </Navbar.Text> 
      )
    })
    return <span>
      { elements }
    </span>
  }
  return (
    <Navbar bg='secondary' variant='light' fixed='top' >
      { renderNavItems() }
    </Navbar>
  )
}

export default AppNav;