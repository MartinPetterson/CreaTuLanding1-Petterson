import { Flex, Menu, MenuButton, MenuItem, MenuList ,Button} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const MyStyle = {
    displey: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#272b45",
    padding: "20px",
    width: "100vw", 
    height: "4rem",
}

const NavBar = () => {
    return <Flex style={MyStyle}>

<Menu>
  <MenuButton as={Button} style={{backgroundColor:"#ffd700", color:"black"}}>
    Menu
  </MenuButton>
  <MenuList>
    <MenuItem>Menu1</MenuItem>
    <MenuItem>Menu2</MenuItem>
    <MenuItem>Menu3</MenuItem>
    <MenuItem>Menu4</MenuItem>
    <MenuItem>Menu5</MenuItem>
  </MenuList>
</Menu>
        <h1 style={{color:"#ffd700"}}> TStore </h1>
        <div style={{color:"#ffd700"}}> <CartWidget /> </div>
    </Flex>
}

export default NavBar;