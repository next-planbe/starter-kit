import { useEffect } from "react"
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

  // set up init-state
  useEffect(() => {
    newPageProps && setPageProps(newPageProps)
  }, [])

  return <Layout {...pageProps}>{children}</Layout>
}

export default LayoutProvider
