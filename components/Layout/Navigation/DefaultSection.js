import { Box, List, Title } from "@mantine/core"

const DefaultSection = ({ id, links, children, title }) => {
  return id || links || children || title ? (
    <Box>
      {title && <Title order={2}>{title}</Title>}
      {links && (
        <Box>
          <List>
            {links.map((link, index) => (
              <List.Item key={`${id ? id : "noId"}#${index}`}>{link}</List.Item>
            ))}
          </List>
        </Box>
      )}
      {children && <Box>{children}</Box>}
    </Box>
  ) : null
}

export default DefaultSection
