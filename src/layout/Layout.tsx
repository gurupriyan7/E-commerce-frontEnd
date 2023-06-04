import { Box } from ".././utils/uiCore";
import { Footer } from "./footer/Footer";
import { Header } from "./header";
import { ReactNode } from "react";
import { useStyles } from "./style";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
const classes = useStyles()

  return (
    <Box className={classes.layoutMain} >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
