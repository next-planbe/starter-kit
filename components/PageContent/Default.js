import { Box } from "@mantine/core"

const DefaultContent = ({ children }) => {
  return (
    <Box id="page-content">
      <Box id="main-content">{children}</Box>
    </Box>
  )
}

export default DefaultContent
