import { useState } from "react"
import Head from "next/head"
import { ColorSchemeProvider, MantineProvider } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"
import LayoutProvider from "../features/Layout/LayoutProvider"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, session, ...props }) {
  const [colorScheme, setColorScheme] = useState(props.colorScheme)

  const toggleColorScheme = val => {
    const nextColorScheme = val || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
  }

  return (
    <>
      <Head>
        <title>Planbe</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <SessionProvider>
              <LayoutProvider>
                <Component {...props} />
              </LayoutProvider>
            </SessionProvider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default MyApp
