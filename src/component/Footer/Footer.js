import Box from "@mui/material/Box";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 2, sm: "17px" }}
        color="#8C1A11"
        display="flex"
        justifyContent={"center"}
      >
        <p>Ihuoma Favour Agbaru &copy; {currentYear}  </p>
      </Box>
    </footer>
  );
}
export default Footer;
