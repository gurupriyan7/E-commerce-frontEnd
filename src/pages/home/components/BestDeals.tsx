import { Card, CardContent, Grid } from "@mui/material";
import { useStyles } from "../style";
import { ProductCard } from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Dispatch, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../features/product/productSlice";

export const BestDeals = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();

  const { products, isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.product
  );

  useEffect(() => {
    dispatch(getProducts(""));
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    console.log(products, "product");
  }, [products, isLoading, isError, isSuccess, message]);

  const cardData = [
    { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Card 2", content: "Consectetur adipiscing elit." },
    { id: 3, title: "Card 3", content: "Praesent at tellus molestie." },
    { id: 4, title: "Card 4", content: "Nullam eget justo vitae." },
    { id: 1, title: "Card 1", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Card 2", content: "Consectetur adipiscing elit." },
    { id: 3, title: "Card 3", content: "Praesent at tellus molestie." },
    { id: 4, title: "Card 4", content: "Nullam eget justo vitae." },
  ];

  return (
    <Grid container spacing={2}>
      {products?.map((product: any) => (
        <Grid key={product._id} item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <ProductCard image={product?.image} name={product?.name}/>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
