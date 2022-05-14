import { Button, createStyles } from "@mantine/core"
import { Logout } from "tabler-icons-react"
import { signOut } from "next-auth/react"

const useStyles = createStyles(theme => ({
  logout: {},
}))

const LogoutWidget = () => {
  return (
    <Button
      color="pink"
      size="sm"
      p={0}
      onClick={() => signOut({ redirect: false })}
    >
      <Logout width="2em" height="2em" />
    </Button>
  )
}

export default LogoutWidget
