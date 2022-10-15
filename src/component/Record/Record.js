import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Record() {
  const rows = [
    { value: 15, header: "Tools", subHeading: "(Total)" },
    { value: 2, header: "Tools", subHeading: "(Missing)" },
    { value: 12, header: "Tools", subHeading: "(Edited)" },
    { value: 15, header: "Tools", subHeading: "∑total / ∑missing" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: 172,
          marginTop: 15,
          backgroundColor: "#D4E0EA",
        },
      }}
    >
      {rows.map((item, i) => (
        <Paper sx={{}}>
          <Box
            sx={{
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                color: "black",
                flex: 1,
                paddingLeft: 2,
                fontSize: 60,
              }}
            >
              {item.value}
            </Typography>
            <Typography
              sx={{
                color: "black",
                flex: 1,
                paddingLeft: 2,
                fontSize: 12,
              }}
            >
              {item.subHeading}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 2,
            }}
          >
            {item.header}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}

export default Record;
