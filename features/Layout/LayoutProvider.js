import { useSession } from "next-auth/react"
import { useEffect } from "react"
import AnonWidgets from "../../components/headerWidgets/AnonWidgets"
import UserWidgets from "../../components/headerWidgets/UserWidgets"
import Layout from "../../components/Layout"
import { useLayout } from "./useLayout"

/**
 * ## LayoutProvider = props => children
 *
 * @param {React.Component} {{children}}: The content-area
 * @param {any} {newPageProps}: props for relay to outcome
 *
 * @returns {React.Component} Layout-component with state
 */

const LayoutProvider = ({ children, ...newPageProps }) => {
  const pageProps = useLayout(state => state.pageProps)
  const setPageProps = useLayout(state => state.setPageProps)
  const { data: session } = useSession()
  const setWidgets = useLayout(state => state.setWidgets)
  const widgets = session ? UserWidgets : AnonWidgets
  // set up init-state
  useEffect(() => {
    if (newPageProps) setPageProps(newPageProps)
    setWidgets(widgets)
  }, [session])

  return <Layout {...pageProps}>{children}</Layout>
}

export default LayoutProvider
