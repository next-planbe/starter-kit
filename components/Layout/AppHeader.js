import { Burger, Header, Title } from "@mantine/core"

/**
 *
 * @param {nummber || string} {id}
 * @param
 * @returns
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
