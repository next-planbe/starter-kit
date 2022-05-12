import { AppShell, Box } from "@mantine/core"
import Link from "next/link"
import { List, Title } from "@mantine/core"
import AppHeader from "./AppHeader"
import AppNavbar from "./Navigation/AppNavbar"
import DefaultSection from "./Navigation/DefaultSection"

/**
 * ## Layout = props => component
 * Toplevel-layout-component
 * @param {React.Component} {children} React component to render as main-content
 * @param {Object} {nav} Navigation-content
 * @param {Object} {header} Header-controlls
 *
 * @returns {React.Component} Full App-View-Component. Best used in _app.js
 */

const Layout = ({ children, nav, header }) => {
  return (
    <AppShell
      header={
        <AppHeader
          burgerOpen={header.burgerOpen}
          clickBurger={header.clickBurger}
          brand={header.brand}
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
