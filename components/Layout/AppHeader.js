import { Burger, Header, List, Title, createStyles, Box } from "@mantine/core"

/**
 * # useStyle = () => stylesObjekt for AppHeader-component
 */
const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  headerElement: {
    flexBasis: "33.333%",
  },
  widgetList: {
    display: "flex",
    justifyContent: "flex-end",
  },
  brand: {
    textAlign: "center",
  },
}))

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
  const { classes } = useStyles()

  return (
    <Header id={id || "app-header-top"} className={classes.wrapper}>
      <Box className={classes.headerElement}>
        <Burger opened={burgerOpen} onClick={clickBurger} />
      </Box>
      <Box className={classes.headerElement}>
        <Title order={1} className={classes.brand}>
          {brand}
        </Title>
      </Box>
      <Box className={classes.headerElement}>
        <List className={classes.widgetList}>
          <List.Item>Widget 1</List.Item>
        </List>
      </Box>
    </Header>
  )
}

export default AppHeader
