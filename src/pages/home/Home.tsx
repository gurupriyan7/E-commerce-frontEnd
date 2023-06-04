
import {Box} from "../../utils/uiCore"
import { Layout } from "../../layout";
import { useStyles } from "./style";
import Carousel from 'react-material-ui-carousel'
import { items } from "../../constants/data";
import { Items } from "./components/Items";
import { BestDeals } from "./components/BestDeals";

export const Home = () => {
const classes = useStyles()

  return (
    <Layout>
      <Box className={classes.homeMain}>
        <Box className={classes.carosal}>
        <Carousel>
            {
                items.map( (item, i) => <Items key={i} item={item} /> )
            }
        </Carousel>
        </Box>
        <Box className={classes.bestDeals}>
          <BestDeals/>
        </Box>
      </Box>
    </Layout>
  );
};
