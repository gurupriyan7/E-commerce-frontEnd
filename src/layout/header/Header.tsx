/* eslint-disable jsx-a11y/alt-text */
import { AiOutlineHeart,FaCartPlus,CgProfile } from "../../utils/uiCore/icons";
import { images } from "../../images/images";
import { Box, Button } from "../../utils/uiCore";
import { TopHeader } from "./components/TopHeader";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import { paths } from "../../path/paths";

export const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerMain}>
      <TopHeader />
      <Box className={classes.bottomHeaderMain}>
        <Box className={classes.bottomTopHeader}>
          <img src={images.logo} className={classes.logo} />
          <input className={classes.classifyInput} placeholder="Classifieds" />
          <input className={classes.searchInput} placeholder="Search" />
          <Box className={classes.iconsGroup}>
            <AiOutlineHeart className={classes.wishlistIcon}/>
            <Box className={classes.cartMain}>
            <FaCartPlus className={classes.cartIcon}/>
            <Box className={classes.cartCount}>4</Box>
            </Box>
            <CgProfile className={classes.profileIcon}/>
            <Button className={classes.headerBtn} variant="contained">Classifieds ▼</Button>
          </Box>
        </Box>
        <Box className={classes.bottombtHeader}>
          <Box className={classes.categoryDropDown}>All Categories ▼</Box>
          <NavLink className={classes.headerlink} to={paths.home}>Books</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Electronics</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Real Estate</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Cars-Bikes</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Dorm-Furniture</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Men</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Women</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Music</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Hobbies Games</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Toys</NavLink>
          <NavLink className={classes.headerlink} to={paths.home}>Kids</NavLink>
        </Box>
      </Box>
    </Box>
  );
};
