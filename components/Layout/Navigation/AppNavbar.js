import { Navbar } from "@mantine/core"

/**
 * # AppNavbar
 * Responsive layout for the navigation-bar
 *
 * @param {React.Component} {children} React component to render as main-content
 * @param {React.Component[]} {nav} An Array of up to 3 React components,
 *                                  each for on the 3 navbar-sections
 * @param {String} {title} The name for the app
 * @param {Boolean} {burgerOpen} Wether the burgers state is opened or not
 * @param {Function} {clickBurger} EventHandler for clicking the burger
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
