import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100' className="nav_menu">
    <Box fontSize='3xl' color='gray.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Agent Immobilier</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu className="menu">
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='gray.50' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Accueil</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Rechercher</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Acheter</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Louer</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);


export default Navbar;
