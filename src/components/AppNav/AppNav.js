import { Navbar } from "react-bootstrap"

function AppNav(props) {
    const renderNavItems = () => {
    let elements = props.navItems.map((item, index) => {
      return (
          <Navbar.Text text='light'>
            <a href='#' key={index} onClick={ () => props.handleNavClick(item.value) }> 
          | { item.label } |
            </a> 
          </Navbar.Text> 
      )
    })
    return (
      <span>
        { elements }
      </span>
    )
  }
  return (
    <div>
      <Navbar bg='secondary' text='light' variant='light' fixed='top' >
        { renderNavItems() }
      </Navbar>
    </div>
  )
}

export default AppNav;