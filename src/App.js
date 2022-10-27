import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

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

  const [show, toggleShow] = React.useState(true);
  const [displayRows, setDisplayRows] = React.useState(filteredLists);

  

  const validation = (e) => {
    const filteredList = filteredLists.filter((row)=>{
      return row.header.toLowerCase().includes(e.target.value.toLowerCase())
    });

    setDisplayRows(filteredList);
    toggleShow(true);
  }

  return (
    <Box
      sx={{
        alignItems: "center",
        height: "92vh",
        display: "flex",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          paddingLeft: 6,
          display: { xs: "none", sm: "block" },
        }}
        alt="Search"
        src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1665853370/toolhub/search_bgvwxo.png"
      />
      <Box
        component="div"
        sx={{
          width: 2,
          height: 120,
          bgcolor: "#D9D9D9",
          marginLeft: 2,
        }}
      />
      <TextField
        id="margin-none"
        onChange={validation}
        placeholder ="Search Tools...."
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          display: "flex",
          width: "80%",
          marginLeft: 4,
          input: { color: "#2A6495", fontSize: 64 },
        }}
      />
      {show && (
        <Box
          component="div"
          sx={{
            width: 500,
            height: "100vh",
            bgcolor: "white",
            boxShadow: 1,
            position: "absolute",
            left: "65%",
            display: "flex",
            flexDirection: "column",
          }}
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
                paddingTop: 15,
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
                onClick={() =>
                  window.location.assign("https://toolhub.wikimedia.org/")
                }
                sx={{
                  marginTop: 1,
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "flex-start",
                  backgroundColor: "#f6f6f6",
                  "&:hover": {
                    background: "#8C1A11",
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
                      color: "#2A6495",
                    }}
                  >
                    {item.header}
                  </Typography>
                  <Typography
                    sx={{
                      flex: 1,
                      flexGrow: 1,
                      fontSize: 12,
                      color: "#2A6495",
                    }}
                  >
                    {item.subHeading}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: 12,
                      color: "#2A6495",
                      marginTop: 1,
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            ))}
            {displayRows.length === 0 && (<p style={{color: "#2A6495", fontSize: 14, fontWeight: "bold" , textAlign:"center"}} >Oops! tools not found, ensure that all words are spelt correctly.
</p>)}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default App;
