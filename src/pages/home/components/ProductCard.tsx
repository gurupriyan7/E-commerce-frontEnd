import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ name,image,price }: any) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
PRICE : ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};
