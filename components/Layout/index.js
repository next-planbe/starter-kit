import { AppShell } from "@mantine/core"
import AppHeader from "./AppHeader"
import AppNavbar from "./Navigation/AppNavbar"

/**
 * ## Layout = props => component
 * Toplevel-layout-component
 * @param {React.Component} {children} React component to render as main-content
 * @param {Object} {nav} Navigation-content
 * @param {Object} {header} Header-controlls
 *
 * @returns {React.Component} Full App-View-Component. Best used in _app.js
 */

const Layout = ({ children, nav, header, ...otherProps }) => {
  return (
    <AppShell
      header={
        <AppHeader
          burgerOpen={header.burgerOpen}
          clickBurger={header.clickBurger}
          brand={header.brand}
          widgets={header.widgets}
        />
      }
      navbar={
        <AppNavbar top={nav.top} bottom={nav.bottom} opened={header.burgerOpen}>
          {nav.main}
        </AppNavbar>
      }
    >
      {children}
    </AppShell>
  )
}

export default Layout
