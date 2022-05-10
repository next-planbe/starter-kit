import { Box, Text, Title } from "@mantine/core"

const DefaultContent = ({ title, children, fontSize }) => {
  return title || children ? (
    <Box id="page-content">
      {title && (
        <Title id="main-title" order={2}>
          {title}
        </Title>
      )}
      {children && (
        <Box id="main-content">
          <Text size={fontSize || "lg"}>{children}</Text>
        </Box>
      )}
    </Box>
  ) : (
    "Nothing"
  )
}

export { DefaultContent }
