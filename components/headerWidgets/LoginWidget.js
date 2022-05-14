import {
  Box,
  Button,
  CloseButton,
  createStyles,
  TextInput,
} from "@mantine/core"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { Login } from "tabler-icons-react"

const useStyles = createStyles(theme => ({
  loginForm: {
    position: "absolute",
    right: "1em",
    top: "1em",
    padding: "1.5em",
    backgroundColor: theme.colors.cyan[2],
    borderRadius: theme.radius.md,
    border: `1px ${theme.colors.dark[5]} solid`,
  },
  closeButton: {
    position: "absolute",
    right: "0",
    top: "0",
  },
}))

const LoginWidget = () => {
  const [isLoginOpen, setLoginOpen] = useState(false)
  const [email, setEmail] = useState("")
  const { classes } = useStyles()

  const handleLoginSubmit = e => {
    e.preventDefault()
    signIn("email", { email, redirect: false })
  }

  return (
    <>
      {!isLoginOpen && (
        <Button size="sm" p={0} onClick={() => setLoginOpen(true)}>
          <Login width="2em" height="2em" />
        </Button>
      )}
      {isLoginOpen && (
        <Box className={classes.loginForm}>
          <CloseButton
            className={classes.closeButton}
            onClick={() => setLoginOpen(false)}
          />
          <form onSubmit={handleLoginSubmit}>
            <TextInput
              label="Your Email-adress:"
              placeholder="your@mail.adress"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              name="email"
            />
            <Button mt="xs" type="submit">
              Send
            </Button>
          </form>
        </Box>
      )}
    </>
  )
}

export default LoginWidget
