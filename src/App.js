import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  
  return (
    <Box
      sx={{
        alignItems: "center",
        height: "92vh",
        display: "flex",
        margin: 6,
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
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
        placeholder="Search Here...."
        variant="standard"
        InputProps={{
          disableUnderline: true,
         
        }}

        sx={{
          display: "flex",
          width: "80%",
          marginLeft: 4,
          input:{color: "#2A6495", fontSize: 72}
          
        }}
      />
    </Box>
  );
}

export default App;
