import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "gatsby"


import MenuItem from "./MenuItem"

/**
 * Define MenuItem fragment and get all primary menu items.
 */
const MENU_QUERY = graphql`

    fragment MenuItem on WPGraphQL_MenuItem {
        id
        label
        url
        title
        target
    }

    query GETMAINMENU {
        wpgraphql {
            menuItems(where: {location: PRIMARY}) {
                nodes {
                    ...MenuItem
                }
            }
            generalSettings {
                url
            }
        }
    }
`
const Menu = ({ siteTitle }) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  console.log(setShow);

  return (
    <StaticQuery
      query={MENU_QUERY}
      render={(data) => {
        if (data.wpgraphql.menuItems) {
          const menuItems = data.wpgraphql.menuItems.nodes
          const wordPressUrl = data.wpgraphql.generalSettings.url

          return (
            <Flex 
              as="nav"
              align="center"
              justify="space-between"
              wrap="wrap"
              color="gray.60"
              py={6}
              >
                <Flex align="center" mr={5}>
                  <Heading as="h1" size="md" color="yellow.500">
                    <Link to="/">
                      {siteTitle}
                    </Link>
                  </Heading>
                </Flex>
                <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                  <svg
                    fill="gray.60"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </Box>
                <Box
                  display={{ sm: show ? "block" : "none", md: "flex" }}
                  width={{ sm: "full", md: "auto" }}
                  alignItems="center"
                  flexGrow={1}
                >
                {
                  menuItems &&
                  menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.id} menuItem={menuItem} wordPressUrl={wordPressUrl}/>
                  ))
                }
                </Box>
            </Flex>
          )
        }
        return null
      }}
    />
  )
}

export default Menu
