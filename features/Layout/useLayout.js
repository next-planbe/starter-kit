import create from "zustand"
import { immer } from "zustand/middleware/immer"
/**
 * ## useLayout = pointer => statePiece
 *
 * state-store for the layout-component
 * @param {Function} pointer is a function over state, returning the wanted piece of state
 *
 * @returns {statePiece} a variable holding the piece of state, the pointer points at
 */
export const useLayout = create(
  immer((set, get) => ({
    pageProps: {
      header: {
        id: "planbe_header",
        brand: "Planbe",
        clickBurger: () => {
          set(state => {
            state.pageProps.header.burgerOpen =
              !state.pageProps.header.burgerOpen
          })
        },
        burgerOpen: false,
        widgets: null,
      },
      nav: {
        opened: true,
        top: "Nabar top",
        bottom: "Navbar bottom",
        main: "Navbar main",
      },
      content: {
        title: "nothing",
        children: "no content, sorry.",
      },
    },

    setContent: newContent => {
      set(state => {
        state.pageProps.content = newContent
      })
    },
    setPageProps: newPageProps => {
      set(state => {
        const prev = state.pageProps
        state.pageProps = {
          header: {
            ...prev.header,
            ...newPageProps.header,
          },
          nav: {
            ...prev.nav,
            ...newPageProps.nav,
          },
          content: newPageProps.content ? newPageProps.content : prev.content,
        }
      })
    },
    toggleBurgerOpen: () => {
      set(state => {
        state.pageProps.header.burgerOpen = !get().pageProps.header.burgerOpen
      })
    },

    setWidgets: widgets =>
      set(state => {
        state.pageProps.header.widgets = widgets
      }),
  }))
)
