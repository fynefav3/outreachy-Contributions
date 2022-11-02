import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";


function createTool(header, subHeading, author) {
  return {
    header,
    subHeading,
    author,
  };
}

function Record() {
  const rows = [
    { value: 15, header: "Tools", subHeading: "(TOTAL)" },
    { value: 2, header: "Tools", subHeading: "(MISSING)" },
    { value: 12, header: "Tools", subHeading: "(EDITED)" },
    { value: 15, header: "∑MISSING / ∑TOTAL", subHeading: "%" },
  ];

  const toolsList = [
    createTool(
      "Wikidata Todo",
      "Shows you little things you can do on Wikidata.",
      "Magnus Manske"
    ),
    createTool(
      "Find duplicate items",
      "Find duplicate items on Wikidata, via labels/aliases.",
      "Magnus Manske"
    ),
    createTool(
      "The Wikidata Game",
      "A set of games to quickly add statements to Wikidata.",
      "Magnus Manske"
    ),
    createTool(
      "ShExStatements",
      "ShExStatements allows the users to generate entity schemas and shape expressions from simple CSV statements.",
      "Jsamwrites"
    ),
    createTool(
      "Harvesting Data Refinery",
      "Tool allowing you to clean data you added to Wikidata. It will show you the data you added and with one click you'll revert your own edit.",
      "Martin Urbanec"
    ),
    createTool(
      "QuickStatements",
      "Tool to edit Wikidata items, based on a simple set of text commands. The tool can add and remove statements, labels, descriptions and aliases; as well as add statements with optional qualifiers and sources.",
      "Magnus Manske"
    ),
    createTool(
      "Harvesting Data Refinery",
      "Tool allowing you to clean data you added to Wikidata. It will show you the data you added and with one click you'll revert your own edit.",
      "Martin Urbanec"
    ),
    createTool(
      "Ranker",
      "Tool to edit the rank of multiple Wikidata statements at once",
      "Lucas Werkmeister"
    ),
    createTool(
      "Mix'n'match",
      "GLAM catalog/Wikidata matching tool; red link lists on steroids.",
      "Magnus Manske"
    ),
    createTool(
      "Name to Q",
      "Convert a batch of article names to Wikidata Q numbers",
      "Taavi Väänänen"
    ),
    createTool(
      "PetScan",
      "Replacement for CatScan2, QuickIntersection, Creator, Autolist etc.",
      "Magnus Manske"
    ),
    createTool(
      "Duplicity",
      "Find Wikipedia articles without associated Wikidata items, and match or create a new item",
      "Magnus Manske"
    ),
    createTool(
      "Wikidata Lexeme Forms",
      "A tool to create Wikidata lexemes with a set of forms (e. g. declensions).",
      "Lucas Werkmeister"
    ),
  ];
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <List
        sx={{
          display: "flex",
          displayFlex: "row",
          marginTop: 10,
          maxWidth: "100%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            "& > :not(style)": {
              m: 1,
              width: 250,
              height: 150,
              marginLeft: 3,
              backgroundColor: "#f3f3f3",
              "&:hover": {
                background: "#3e68c5",
              },
            },
          }}
        >
          {rows.map((item, i) => (
            <Paper>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    paddingLeft: 2,
                    fontSize: 70,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    flex: 1,
                    paddingLeft: 2,
                    fontSize: 17,
                    marginTop: 3,
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
                  fontSize: 20,
                }}
              >
                {item.header}
              </Typography>
            </Paper>
          ))}
        </Box>
      </List>
      <Box sx={{ width: "100%", marginTop: 10 }}>
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            overflow: "auto",
          }}
        >
          {toolsList.map((item, i) => (
            <Paper
            onClick={() => {
              localStorage.setItem("item", JSON.stringify(item));
              navigate("/tool", {
                state: item,
              });
            }}
              sx={{
                marginLeft: 2,
                padding: 2,
                backgroundColor: "#ffffff",
                width: 400,
                "&:hover": {
                  background: "#3e68c5",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 80,
                    display: { xs: "none", sm: "block" },
                  }}
                  alt="Tools"
                  src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666049416/toolhub/bi_tools_yhwuda.png"
                />
                <Typography
                  sx={{
                    color: "black",
                    flex: 1,
                    paddingLeft: 2,
                    fontSize: 20,
                  }}
                >
                  {item.header}
                </Typography>
              </Box>

              <TextField
                id="outlined-multiline-static"
                multiline
                rows={3}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                  style: {
                    textAlign: "end",
                    fontSize: 12,
                  },
                  readOnly: true,
                }}
                value={item.subHeading}
                sx={{
                  flex: 1,
                  marginTop: 1,
                  padding: 1,
                  width: "100%",
                }}
              />
              <Typography
                sx={{
                  marginTop: 4,
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {item.author}
              </Typography>
            </Paper>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 60,
          paddingBottom: 10,
        }}
      ></Box>
    </Box>
  );
}

export default Record;
