import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../path/paths";

export const ProductCard = ({ name,image,price }: any) => {
const navigate = useNavigate()

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
        <Button onClick={()=>navigate(paths.cart)} variant="outlined" size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};
