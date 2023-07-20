import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../../public/logo.png";
import { Stack } from "@mui/material";
import ButtonCard from "../../components/service/ButtonCard";

const pages = ["services", "Portfolio", "Company", "Events & Media", "Blogs "];

const Naxa = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const styles = {
      padding: "0 6rem",
      position: "sticky",
      backgroundColor: "transparent",
      boxShadow: "none",
    };

  return (
    <div>
      <AppBar style={styles}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box
            >
              <Stack sx={{ maxWidth: "120px", marginRight: '4rem' }}>
                <img src={logo} alt="logo" />
              </Stack>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages &&
                  pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="black">
                        {page}
                      </Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#000", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
             
                <ButtonCard text="Let's talk" />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <section className="header">
          <Stack
            sx={{
              width: "70%",
              padding: "3rem 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h6" sx={{ color: "#ffab00" }}>
              SERVICES
            </Typography>
            <Typography variant="h3">
              At <span>NAXA</span>, we work on <span>ideas</span>; ideas that
              can provide <span>simple solutions</span> to
              <span> complex problems.</span>
            </Typography>
            <Typography variant="h6">
              We work as a team to generate, explore, build and validate ideas.
              We also contextualize innovations around the world to find the
              best fitting solutions to local problems.
            </Typography>
          </Stack>
        </section>
    </div>
  );
};

export default Naxa;