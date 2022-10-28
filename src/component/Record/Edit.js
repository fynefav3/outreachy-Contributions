import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Edit(props) {
  const title = localStorage.getItem("item");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/record");
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Typography sx={{ fontSize: 60, paddingTop: 10, paddingBottom: 5 }}>
        {JSON.stringify(title)}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Name"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803832/toolhub/icon-park-outline_edit-name_cb1xik.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="Name"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Title"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666813323/toolhub/pajamas_title_lcurh5.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="Title"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Description"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803819/toolhub/description_ygmic1.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              minHeight: "80%",
              maxHeight: "80%",
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            multiline
            rows={3}
            placeholder="Description"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Url"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803857/toolhub/url_wrzloz.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="Url"
            variant="standard"
            type="url"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Authors"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803797/toolhub/authors_dgoqfz.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="Authors (separated by comma)"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="Bug Tracker"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803790/toolhub/bug_tracker_j4qzdz.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="Bug tracker Url"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 1,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            sx={{
              height: 24,
              width: 26,
              paddingLeft: 6,
              display: { xs: "none", sm: "block" },
            }}
            alt="User"
            src="https://res.cloudinary.com/dl6pfjd5w/image/upload/v1666803866/toolhub/user_doc_b68kd0.png"
          />
          <Box
            component="div"
            sx={{
              width: 2,
              height: 24,
              bgcolor: "#D9D9D9",
              marginLeft: 2,
            }}
          />
          <TextField
            id="margin-none"
            placeholder="User Doc"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            sx={{
              display: "flex",
              width: "100%",
              marginLeft: 4,
              input: { color: "#2A6495", fontSize: 16 },
            }}
            required
          />
        </Box>
        <Box
          sx={{
            height: 2,
            width: "100%",
            backgroundColor: "#f7f7f7",
            marginTop: 2,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
          justifyContent: " center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#2A6495",
            height: 60,
            width: 200,
            marginTop: 5,
            fontSize: 20,
          }}
          variant="contained"
          type="submit"
        >
          SAVE
        </Button>

        <Button
          sx={{
            backgroundColor: "transparent",
            height: 60,
            width: 200,
            marginTop: 5,
            fontSize: 20,
            color: "black",
          }}
          variant="text"
          type="reset"
        >
          CANCEL
        </Button>
      </Box>
    </Box>
  );
}

export default Edit;
