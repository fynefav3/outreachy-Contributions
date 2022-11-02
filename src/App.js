import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function App() {
  const filteredLists = [
    {
      header: "Wikidata Todo",
      subHeading: "Shows you little things you can do on Wikidata.",
      author: "Magnus Manske",
    },
    {
      header: "Find Duplicate Items",
      subHeading: "Find duplicate items on Wikidata, via labels/aliases.",
      author: "Magnus Manske",
    },
    {
      header: "The Wikidata Game",
      subHeading: "A set of games to quickly add statements to Wikidata.",
      author: "Magnus Manske",
    },
    {
      header: "ShExStatements",
      subHeading:
        "ShExStatements allows the users to generate entity schemas and shape expressions from simple CSV statements.",
      author: "Jsamwrites",
    },
    {
      header: "Harvesting Data Refinery",
      subHeading:
        "Tool allowing you to clean data you added to Wikidata. It will show you the data you added and with one click you'll revert your own edit.",
      author: "Martin Urbanec",
    },
    {
      header: "QuickStatements",
      subHeading:
        "Tool to edit Wikidata items, based on a simple set of text commands. The tool can add and remove statements, labels, descriptions and aliases; as well as add statements with optional qualifiers and sources.",
      author: "Magnus Manske",
    },
    {
      header: "Harvesting Data Refinery",
      subHeading:
        "Tool allowing you to clean data you added to Wikidata. It will show you the data you added and with one click you'll revert your own edit.",
      author: "Martin Urbanec",
    },
    {
      header: "Ranker",
      subHeading:
        "Tool to edit the rank of multiple Wikidata statements at once",
      author: "Lucas Werkmeister",
    },
    {
      header: "Mix'n'match",
      subHeading:
        "GLAM catalog/Wikidata matching tool; red link lists on steroids.",
      author: "Magnus Manske",
    },
    {
      header: "Name to Q",
      subHeading: "Convert a batch of article names to Wikidata Q numbers",
      author: "Taavi Väänänen",
    },
    {
      header: "PetScan",
      subHeading:
        "Replacement for CatScan2, QuickIntersection, Creator, Autolist etc.",
      author: "Magnus Manske",
    },
    {
      header: "Duplicity",
      subHeading:
        "Find Wikipedia articles without associated Wikidata items, and match or create a new item",
      author: "Magnus Manske",
    },
    {
      header: "Wikidata Lexeme Forms",
      subHeading:
        "A tool to create Wikidata lexemes with a set of forms (e. g. declensions).",
      author: "Lucas Werkmeister",
    },
  ];

  const [show, toggleShow] = React.useState(false);
  const [displayRows, setDisplayRows] = React.useState(filteredLists);

  const navigate = useNavigate();

  const validation = (e) => {
    const filteredList = filteredLists.filter((row) => {
      return row.header.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setDisplayRows(filteredList);
    toggleShow(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 15,
          paddingBottom: 8,
          paddingLeft: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            height: {
              xs: 40,
              sm: 40,
              md: 70,
              lg: 150,
            },
            width: {
              xs: 40,
              sm: 40,
              md: 100,
              lg: 150,
            },
          }}
          alt="Toolhub"
          src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1665694663/toolhub/Screenshot_2022-10-12_at_22.51_2_u0n8xh.png"
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
              fontSize: {
                xs: 16,
                sm: 16,
                md: 20,
                lg: 32,
              },
              paddingBottom: 2,
              fontWeight: "w500",
            }}
          >
            Toolhub is a community-authored catalog of Wikimedia tools.
          </Typography>
          <Typography
            sx={{
              color: "black",
              flex: 1,
              paddingLeft: 4,
              paddingBottom:{
                xs: 2,
                sm:2
              },
              fontSize: {
                xs: 0,
                sm: 0,
                md: 16,
                lg: 18,
              },
            }}
          >
            Discover new tools, promote their use in your wiki community, help
            improve them by contributing data.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 4,
            }}
          >
            <Box
              component="img"
              src="https://www.freeiconspng.com/thumbs/history-icon-png/simple-history-icon-18.png"
              sx={{
                width: 20,
                height: 20,
              }}
            />
            <Typography
              sx={{
                color: "black",
                flex: 1,
                paddingLeft: 4,
                fontSize: {
                  xs: 13,
                  sm: 13,
                  md: 16,
                  lg: 18,
                },
              }}
            >
              0 tools last updated on Nov 2, 2022 5:08 PM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 4,
            }}
          >
            <Box
              component="img"
              src="https://www.clipartmax.com/png/full/28-282197_tools-png-transparent-image-transparent-background-tools-icon.png"
              sx={{
                width: 20,
                height: 20,
              }}
            />
            <Typography
              sx={{
                color: "black",
                flex: 1,
                paddingLeft: 4,
                fontSize: 15,
              }}
            >
              2765 tools found
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          // paddingLeft: 4,
        }}
      >
        <Box
          component="img"
          sx={{
            height: {
              xs: 15,
              sm: 30,
              md: 50,
              lg: 60,
            },
            width: {
              xs: 15,
              sm: 30,
              md: 50,
              lg: 60,
            },
            paddingLeft: 4,
            display: { xs: "none", sm: "block" },
          }}
          alt="Search"
          src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1665853370/toolhub/search_bgvwxo.png"
        />
        <Box
          component="div"
          sx={{
            width: 2,
            height: 80,
            bgcolor: "#D9D9D9",
            marginLeft: 2,
          }}
        />
        <TextField
          id="margin-none"
          onChange={validation}
          placeholder="Search Toolhub..."
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            display: "flex",
            width: "80%",
            marginLeft: 4,
            input: {
              color: "#3e68c5",
              fontSize: {
                xs: 18,
                sm: 20,
                md: 20,
                lg: 35,
                xl: 35,
              },
            },
          }}
        />
        {show && (
          <Box
            component="div"
            sx={{
              width: {
                xs: "100%",
                sm: "50%",
                md: "55%",
                lg: "55%",
                xl: "55%",
              },
              height: {
                xs: "50%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
              bgcolor: "white",
              boxShadow: 1,
              position: "absolute",
              left: {
                xs: 0,
                sm: "50%",
                md: "40%",
                lg: "45%",
                xl: "45%",
              },
              bottom: {
                xs: 0,
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              top: {
                xs: "60%",
                sm: 0,
                md: 0,
                lg: 0,
                xl: 0,
              },
              display: "flex",
              flexDirection: "column",
              paddingBottom: {
                xs: 10,
                sm: 4,
                md: 4,
                lg: 5,
                xl: 5,
              },
            }}
            direction={{ xs: "row", sm: "row" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                alignContent: "flex-end",
              }}
            >
              <Box
                component="img"
                onClick={() => toggleShow(!show)}
                sx={{
                  height: 24,
                  width: 24,
                  paddingTop: {
                    xs: 0,
                    sm: 8,
                    md: 8,
                    lg: 10,
                    xl: 10,
                  },
                  paddingBottom: 2,
                  paddingRight: 2,
                }}
                alt="Delete"
                src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666183417/toolhub/Vector_ql9nso.png"
              />
            </Box>
            <List
              sx={{
                flex: 1,
                overflow: "auto",
              }}
            >
              {displayRows.map((item, i) => (
                <Box
                  key={`${item.header}_${i}`}
                  onClick={() => {
                    localStorage.setItem("item", JSON.stringify(item));
                    navigate("/tool", {
                      state: item,
                    });
                  }}
                  sx={{
                    marginTop: 1,
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "flex-start",
                    backgroundColor: "#f6f6f6",
                    "&:hover": {
                      background: "#f3f3f3",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      maxHeight: 60,
                      maxWidth: 60,
                      paddingRight: 1,
                    }}
                    alt="Tools"
                    src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666049416/toolhub/bi_tools_yhwuda.png"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                      paddingLeft: 1,
                      paddingRight: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#3e68c5",
                      }}
                    >
                      {item.header}
                    </Typography>
                    <Typography
                      sx={{
                        flex: 1,
                        flexGrow: 1,
                        fontSize: 12,
                        color: "#3e68c5",
                      }}
                    >
                      {item.subHeading}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "#3e68c5",
                        marginTop: 1,
                      }}
                    >
                      {item.author}
                    </Typography>
                  </Box>
                </Box>
              ))}
              {displayRows.length === 0 && (
                <p
                  style={{
                    color: "#3e68c5",
                    fontSize: 14,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Oops! tools not found, ensure that all words are spelt
                  correctly.
                </p>
              )}
            </List>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
