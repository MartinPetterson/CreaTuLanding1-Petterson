import { Outlet } from "react-router";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <Box width={"100vw"}>
      <NavBar/>
      <Box width={"100vw"} bg="#242424">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
