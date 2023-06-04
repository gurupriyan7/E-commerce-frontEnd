import { Box } from ".././utils/uiCore";
import { Footer } from "./footer/Footer";
import { Header } from "./header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
