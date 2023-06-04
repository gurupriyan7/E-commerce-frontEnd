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
  }, [products, isLoading, isError, isSuccess, message]);



  return (
    <Grid container spacing={2}>
      {products?.map((product: any) => (
        <Grid key={product._id} item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <ProductCard image={product?.image} name={product?.name} price={product?.price}/>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
