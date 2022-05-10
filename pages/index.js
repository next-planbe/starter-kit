import { Button, Text, Title } from "@mantine/core"
import Head from "next/head"
import { useEffect } from "react"
import { DefaultContent } from "../components/home"
import { useLayout } from "../features/Layout/useLayout"
export default function Dashboard(props) {
  const content = useLayout(state => state.pageProps.content.children)
  const title = useLayout(state => state.pageProps.content.title)
  const setContent = useLayout(state => state.setContent)
  const toggleBurgerOpen = useLayout(state => state.toggleBurgerOpen)

  useEffect(() => {
    setContent({
      title: "Dashboard",
      children: <Text>Different data-related stuff will appear here.</Text>,
    })
  }, [])
  return (
    <DefaultContent title={title}>
      {content}
      <Button onClick={toggleBurgerOpen}>Click me</Button>
    </DefaultContent>
  )
}
