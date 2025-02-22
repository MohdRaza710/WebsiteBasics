import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

const ProductCard = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Card
        sx={{
          width: "100%", // Takes full width in small screens
          maxWidth: 345, // Limits max width
          margin: 2,
          display: "flex",
          flexDirection: "column", // Stacks image & content properly
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={product.productName}
          src={product.img?.URL || "https://via.placeholder.com/150"}
          sx={{
            width: "100%", // Makes image responsive
            height: "200px",
            objectFit: "contain",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price: {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {product.type}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
