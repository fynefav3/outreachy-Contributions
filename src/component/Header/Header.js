import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = (props) => {
  const drawerWidth = 240;
  

  const navItems = [
    { name: "Home", route: "/" },
    { name: "Leaderboard", route: "/leaderboard" },
    { name: "Record", route: "/record" },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Toolhub
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, idx) => (
          //dynamic routing, using the array properties as the route, either
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{ bgcolor: "white", elevation: 0 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none", bgcolor: "#000" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="img"
            sx={{
              height: 50,
              display: { xs: "none", sm: "block" },
            }}
            alt="Toolhub"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1665694663/toolhub/Screenshot_2022-10-12_at_22.51_2_u0n8xh.png"
          />
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 2,
            }}
          >
            Toolhub
          </Typography>
          <Box
            component="div"
            sx={{
              height: 64,
              flexGrow: 1,
            }}
          />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Link to={item.route} style={{ textDecoration: "none" }}>
                <Button
                  key={item.name}
                  sx={{
                    ...(item.name === "Home"
                      ? {
                          color: "#8C1A11",
                          fontWeight: "bold",
                          textTransform: "none",
                          
                        }
                        
                      : {
                          color: "black",
                          textTransform: "none",
                         
                        }),
                  }}
                >
                  <Box
                    sx={{
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography> {item.name}</Typography>
                    <Box
                      sx={{
                        height: 8,
                        width: 8,
                        borderRadius: 4,
                        ...(item.name === "Home"
                          ? {
                              bgcolor: "#8C1A11",
                            }
                          : {}),
                      }}
                    />
                  </Box>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
