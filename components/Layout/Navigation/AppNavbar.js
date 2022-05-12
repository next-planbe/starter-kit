import { Navbar } from "@mantine/core"

/**
 * ## AppNavbar = props => component
 *
 * props :
 * @param {React.Component} {{top}}: Navigation-header
 * @param {React.Component} {{bottom}}: Navigation-footer
 * @param {React.Component} {{main}}: Main Navigation-content
 * @param {Boolean} {{opened}}: wether the navbar is open or not
 * @param {String} {{id}}: html-id for the main-nav-element
 *
 * @returns {React.Component} Full App-View-Component. Best used in _app.js
 */

const AppNavbar = ({ top, bottom, children, opened, id }) => {
  return (
    <Navbar hidden={!opened} id={id || "navbar-main"}>
      <Navbar.Section>{top}</Navbar.Section>
      <Navbar.Section>{children}</Navbar.Section>
      <Navbar.Section>{bottom}</Navbar.Section>
    </Navbar>
  )
}

export default AppNavbar
