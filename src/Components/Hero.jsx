import { Box, Typography } from "@mui/material";
import React from "react";
import cart from "../Assets/Images/shoppingcart-1066110386.webp"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${cart})`,
          backgroundPosition:"center",
          margin:"20px",
          backgroundSize:"cover",
          transition:"transform 0.3s ease",
            "&:hover":{transform:"scale(1.05)"},
            objectFit:"cover",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
            background: 'linear-gradient(to left,rgb(127, 132, 35),rgb(40, 48, 3))',
            WebkitBackgroundClip: 'text',  // Ensures the background gradient applies to the text
            color: 'transparent',
          }}
          gutterBottom
        >
          Welcome to website
        </Typography>
        {/* <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
          sub title or tagile
        </Typography> */}
        {/* <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iusto
          totam doloribus id tempore. Numquam a esse ut minima sapiente.
        </Typography> */}
      </Box>
    </Box>
  );
}
