import { Burger, Header, Title } from "@mantine/core"

/**
 * ## AppHeader = props => component
 *
 * props:
 * @param {React.Component} {{brand}} The apps brand
 * @param {Boolean} {{burgerOpen}} Wether the burgers state is opened or not
 * @param {Function} {{clickBurger}} EventHandler for clicking the burger
 * @param {React.Component[]} {{widgets}} List of react-elements
 *
 * @returns {React.Component} The header-component
 */

const AppHeader = ({ id, brand, burgerOpen, clickBurger }) => {
  return (
    <Header id={id || "app-header-top"}>
      <Burger opened={burgerOpen} onClick={clickBurger} />
      <Title order={1}>{brand}</Title>
    </Header>
  )
}

export default AppHeader
