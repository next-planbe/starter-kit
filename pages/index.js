import { Text } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { DefaultContent } from "../components/home"
import { useLayout } from "../features/Layout/useLayout"

export default function Dashboard(props) {
  const content = useLayout(state => state.pageProps.content.children)
  const title = useLayout(state => state.pageProps.content.title)
  const setContent = useLayout(state => state.setContent)
  const { data: session } = useSession()

  useEffect(() => {
    setContent({
      title: "Dashboard",
      children: <Text>Different data-related stuff will appear here.</Text>,
    })
  }, [])
  return (
    <DefaultContent title={title}>
      {session ? content : "Not allowed"}
    </DefaultContent>
  )
}
