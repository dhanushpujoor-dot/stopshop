import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import cart1 from "../Assets/Images/shop4.jpg";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, height: "auto" }}>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "grey",
          borderRadius: "20px",
           overflow: "hidden",
          height: "350px", // Set a fixed height for the entire box
        }}
      >
        {/* Left Grid (Image) */}
        <Grid item xs={12} sm={3}>
          <img
            src={cart1}
            alt="shop"
            style={{
              width: "280px",
              height: "320px",
              // objectFit: "cover",
              position: "center",
              borderRadius: "20px", 
            }}
          />
        </Grid>

        {/* Right Grid (Text) */}
        <Grid
          item
          xs={12}
          sm={9}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "left",
            textAlign:"left",
            p: 3,
            height: "100%", // Ensure the text section fills the height of the container
          }}
        >
          <Box sx={{ textAlign: "justify", color: "white", height: "100%" }}>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "900",
                fontSize: "40px",
                color: "white",
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{
                fontWeight: "900",
                color: "white",
              }}
            >
              Shop the Latest Trends
            </Typography>

            <Typography variant="body2" gutterBottom>
              At shop|stop, we believe that shopping should be an exciting,
              seamless, and personalized experience. Founded in 2003, we are a
              passionate team dedicated to bringing you the latest trends and
              high-quality products in fashion, electronics, home goods, and more.
              Our goal is to provide you with everything you need, all in one
              place – at the best prices and with the highest level of customer
              service.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quae rem temporibus ab delectus et ipsum facere accusantium
              doloribus exercitationem!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
