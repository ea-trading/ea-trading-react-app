import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";


import CloseIcon from "@mui/icons-material/Close";
import { Navbar } from "./Nav";
const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  background: theme.palette.background.paper,
  backgroundColor: "transparent",
  justifyContent: "start",
  backdropFilter: "blur(4px)",

  [theme.breakpoints.up("lg")]: {
    minHeight: "70px",
    paddinLeft: 0,
  },
}));
const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  paddingLeft: 0,
  color: theme.palette.text.secondary,
}));
export default function Header(props) {
  const [isSidebar, setIsSidebar] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isSidebar && (
        <div
          style={{
            overflow: "hidden",
            zIndex: 10012121,
            background: "#100819",
            position: "fixed",
            left: 0,
            top: 0,
            width: "290px",
            height: "100vh",
          }}
        >
          <div style={{ padding: "1.5rem", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                right: "5px",
                top: "5px",
              }}
            >
              <CloseIcon
                onClick={() => setIsSidebar(!isSidebar)}
                sx={{ fontSize: "26px" }}
                color="secondary"
              />
            </div>
            <Navbar ffor="mobile" />
          </div>
        </div>
      )}
      <AppBarStyled position="sticky" color="default">
        {/* mobiel nav */}

        <ToolbarStyled style={{ padding: 0 }}>
          <Box>
            <Box
              component="img"
              src="/assets/logo/logo.png"
              sx={{ height: "40px" }}
            ></Box>
          </Box>

          <Box
            width="100%"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}
          >
            <Navbar />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "none",
              },
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                
                color: "default",
                borderRadius: "4px",
              }}
            >
              <MenuIcon
                onClick={() => setIsSidebar(!isSidebar)}
                sx={{ fontSize: "26px" }}
                color="secondary"
              />
            </Box>
          </Box>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
}
