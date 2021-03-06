import React from "react"
import { CreateLocalLink } from "../utils"
import { Link } from "gatsby"
import { Text }from "@chakra-ui/core"

const MenuItem = ({ menuItem, wordPressUrl }) => {
  return (
    <Text mt={{ base: 4, md: 0,  }} mr={6} my={0} display="block" color="olive">
      <Link  to={CreateLocalLink(menuItem, wordPressUrl)}>{menuItem.label}</Link>
    </Text>
  )
}

export default MenuItem
