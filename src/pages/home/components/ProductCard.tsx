import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

export const ProductCard = () => {

  return (
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMrA3d1xSudSAdOIO7UBb8VlhJy441dbUPQ&usqp=CAU"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  )
}
