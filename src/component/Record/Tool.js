import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Tool() {
  const navigate = useNavigate();
  const item = localStorage.getItem("item");
  const it = JSON.parse(item);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 12,
          justifyContent: { xs: "flex-start", lg: "flex-end", xl: "flex-end" },
          paddingRight: 4,
        }}
      >
        <Button
          onClick={() => {
            localStorage.setItem("itemEdit", it.header);
            navigate("/edit");
          }}
          sx={{
            backgroundColor: "#3e68c5",
            height: {
              xs: 26,
              sm: 26,
              md: 28,
              lg: 40,
              xl: 45,
            },
            width: {
              xs: 120,
              sm: 120,
              md: 120,
              lg: 130,
              xl: 200,
            },
            marginTop: 5,
            fontSize: {
              xs: 12,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 16,
            },
            marginLeft: 1,
            marginRight: 1,
          }}
          variant="contained"
          type="submit"
        >
          EDIT TOOL
        </Button>
        <Button
          sx={{
            backgroundColor: "#F5F5F5",
            height: { xs: 26, sm: 26, md: 28, lg: 45, xl: 45 },
            width: {
              xs: 120,
              sm: 120,
              md: 120,
              lg: 130,
              xl: 200,
            },
            marginTop: 5,
            fontSize: {
              xs: 12,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 16,
            },
            color: "black",
            marginLeft: 1,

            marginRight: 1,
          }}
          variant="text"
        >
          FAVOURITE
        </Button>

        <Button
          sx={{
            backgroundColor: "#F5F5F5",
            height: { xs: 26, sm: 26, md: 28, lg: 45, xl: 45 },
            width: {
              xs: 120,
              sm: 120,
              md: 120,
              lg: 130,
              xl: 150,
            },
            marginTop: 5,
            fontSize: {
              xs: 12,
              sm: 12,
              md: 14,
              lg: 16,
              xl: 16,
            },
            color: "black",
            marginLeft: { xs: 0, xl: 1 },
            marginRight: { xs: 0, xl: 1 },
          }}
          variant="text"
        >
          VIEW HISTORY
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 4,
        }}
      >
        <Box
          component="img"
          src="https://www.clipartmax.com/png/full/28-282197_tools-png-transparent-image-transparent-background-tools-icon.png"
          sx={{
            width: 70,
            height: 70,
            marginLeft: { xs: 4, xl: 8 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 4,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {it.header}
          </Typography>
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 4,
              fontSize: 16,
              paddingBottom: 2,
            }}
          >
            {it.subHeading}
          </Typography>
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 4,
              fontSize: { xs: 14, xl: 16 },
            }}
          >
            Author(s): {it.author}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              sx={{
                backgroundColor: "#3E68C5",
                height: { xs: 26, sm: 26, md: 28, lg: 45, xl: 45 },
                width: {
                  xs: 120,
                  sm: 120,
                  md: 120,
                  lg: 150,
                  xl: 200,
                },
                marginTop: 5,
                fontSize: {
                  xs: 12,
                  sm: 12,
                  md: 14,
                  lg: 16,
                  xl: 16,
                },
                color: "#FFFFFF",
                marginLeft: 1,

                marginRight: 1,
              }}
              variant="contained"
            >
              BROWSE TOOL
            </Button>
            <Button
              sx={{
                backgroundColor: "#FFFFFF",
                height: { xs: 26, sm: 26, md: 28, lg: 45, xl: 45 },
                width: {
                  xs: 120,
                  sm: 120,
                  md: 120,
                  lg: 150,
                  xl: 200,
                },
                marginTop: 5,
                fontSize: {
                  xs: 12,
                  sm: 12,
                  md: 14,
                  lg: 16,
                  xl: 16,
                },
                color: "#3E68C5",
                marginLeft: 1,

                marginRight: 1,
              }}
              variant="contained"
            >
              SOURCE CODE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Tool;
