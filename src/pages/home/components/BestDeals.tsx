import { Card, CardContent, Grid } from "@mui/material"
import { useStyles } from "../style"
import { ProductCard } from "./ProductCard";

 export const BestDeals = () => {
const classes = useStyles()

const cardData = [
          { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
          { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
          { id: 3, title: 'Card 3', content: 'Praesent at tellus molestie.' },
          { id: 4, title: 'Card 4', content: 'Nullam eget justo vitae.' },
          { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.' },
          { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
          { id: 3, title: 'Card 3', content: 'Praesent at tellus molestie.' },
          { id: 4, title: 'Card 4', content: 'Nullam eget justo vitae.' },
        ];


return (
          <Grid container spacing={2}>
          {cardData.map((card) => (
            <Grid key={card.id} item xs={12} sm={6} md={3}>
              <Card>
                <CardContent>
                <ProductCard/>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        );
}
